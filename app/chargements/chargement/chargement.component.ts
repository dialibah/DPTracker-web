import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ChargementService} from "../chargements.service";
import {Session, SessionService} from "../../components/session/session.service";
import {Chargement} from "../chargements.modele";
import {FormBuilder, FormGroup} from "@angular/forms";

import _extend = require('lodash/extend');

/**
	* Created by nureynisow on 22/09/2017.
	* for DPTracker
	*/

@Component({
	selector: 'dpt-chargement',
	templateUrl: './chargement.component.html'
})
export class ChargementComponent implements OnInit{
	private profile: Session;
	chargement: Chargement;
	chargementForm: FormGroup;

	constructor(private routerService:ActivatedRoute,
				private router: Router,
				private session: SessionService,
				private formBuilder: FormBuilder,
				private chargementService:ChargementService){
	}

	ngOnInit(): void {
		this.session.session$.subscribe(s => this.profile = s);
		this.routerService.params.subscribe(p => {
			this.chargementService.getChargement(p['id'])
				.subscribe(res => {
					this.chargement = res;
					this.chargementForm = this.buildForm(this.chargement);
				}, e => this.session.logout());
		});
	}


	addColis():void {
		this.chargementService.addColis(this.chargement.guid, this.profile.email).subscribe(res => {
			if(res.guid) this.router.navigate(['/colis/', this.chargement.guid, res.guid]);
		});
	}

	openColis(guid: String) {
		if(guid) this.router.navigate(['/colis/', this.chargement.guid, guid]);
	}

	private buildForm(chargement: Chargement) {
		return this.formBuilder.group({
			description: ['', []],
			leavingDate: ['', []],
			arrivalDate: ['', []],
			statutChargement: ['', []]
		});
	}

	save(){
		this.chargement = _extend(this.chargement, this.chargementForm.value);
		console.log(this.chargement);
		this.chargementService.updateChargement(this.chargement.guid, this.chargement)
			.subscribe(res => this.chargement = res);
	}
}