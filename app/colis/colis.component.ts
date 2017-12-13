import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargementService } from '../chargements/chargements.service';
import { Session, SessionService } from '../components/session/session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Colis } from '../chargements/chargements.modele';

@Component({
	selector: 'dpt-colis',
	templateUrl: './colis.component.html'
})
export class ColisComponent implements OnInit{
	private profile: Session;
	private colis: Colis;
	private colisForm: FormGroup;
	private chargementId: string;
	constructor(private routerService:ActivatedRoute,
				private router: Router,
				private session: SessionService,
				private formBuilder: FormBuilder,
				private chargementService:ChargementService){
	}

	ngOnInit(): void {
		this.session.session$.subscribe(s => this.profile = s);
		this.routerService.params.subscribe(p => {
			this.chargementId = p['chargementId'];
			this.chargementService.getColis(p['chargementId'], p['colisId'])
				.subscribe(res => {
					this.colis = res;
					this.colisForm = this.buildForm(this.colis);});
		});
	}

	private buildForm ( colis: Colis ) {
		colis.destinataire = colis.destinataire || {};
		colis.expediteur = colis.expediteur || {};
		return this.formBuilder.group({
			typeColis: [colis.typeColis || '', [Validators.required]],
			dateEnlevement: [colis.dateEnlevement || '', []],
			poids: [colis.poids|| '', []],
			dimension: [colis.dimension|| '', []],
			lieuEnlevement: [colis.lieuEnlevement|| '', []],
			detail: [colis.detail|| '', []],
			destinataire : this.formBuilder.group({
				nom:[colis.destinataire.nom, []],
				prenom:[colis.destinataire.prenom, []],
				adresse:[colis.destinataire.adresse, []],
				telephone:[colis.destinataire.telephone, []],
				email:[colis.destinataire.email, []]
			}),
			expediteur : this.formBuilder.group({
				nom:[colis.expediteur.nom, []],
				prenom:[colis.expediteur.prenom, []],
				adresse:[colis.expediteur.adresse, []],
				telephone:[colis.expediteur.telephone, []],
				email:[colis.expediteur.email, []]
			})
		});
	}

	save(){
		this.chargementService.updateColis(this.chargementId, this.colis.guid, this.colisForm.value).subscribe();
	}
}