import {Component} from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ChargementService } from '../chargements/chargements.service';
import { Session, SessionService } from '../components/session/session.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Colis } from '../chargements/chargements.modele';

@Component({
	selector: 'dpt-colis',
	templateUrl: './colis.component.html'
})
export class ColisComponent {
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
					this.colisForm = this.buildForm(this.colis);
				}, e => console.log(e));
		});
	}

	private buildForm ( colis: Colis ) {
		return this.formBuilder.group({

		});
	}
}