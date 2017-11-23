import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChargementService } from '../chargements/chargements.service';
import { Session, SessionService } from '../components/session/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Colis } from '../chargements/chargements.modele';

@Component({
	selector: 'dpt-colis',
	templateUrl: './colis.component.html'
})
export class ColisComponent implements OnInit{
	private profile: Session;
	private colis: Colis;
	private colisForm: FormGroup;
	constructor(private routerService:ActivatedRoute,
				private router: Router,
				private session: SessionService,
				private formBuilder: FormBuilder,
				private chargementService:ChargementService){
	}

	ngOnInit(): void {
		this.session.session$.subscribe(s => this.profile = s);
		this.routerService.params.subscribe(p => {
			this.chargementService.getColis(p['chargementId'], p['colisId'])
				.subscribe(res => {
					this.colis = res;
					this.colisForm = this.buildForm(this.colis);});
		});
	}

	private buildForm ( colis: Colis ) {
		return this.formBuilder.group({
			typeColis: [colis.typeColis || '', []],
			dateEnlevement: [colis.dateEnlevement || '', []],
			destination: [colis.destination || '', []],
			poids: [colis.poids|| '', []],
			dimension: [colis.dimension|| '', []],
			lieuEnlevement: [colis.lieuEnlevement|| '', []],
			detail: [colis.detail|| '', []]
		});
	}
}