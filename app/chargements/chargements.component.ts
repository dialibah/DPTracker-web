/**
 * Created by nureynisow on 05/08/2017.
 * for DPTracker
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChargementService } from './chargements.service';
import { Chargement } from './chargements.modele';
import { Session, SessionService } from '../components/session/session.service';

@Component({
	selector: 'dpt-chargements',
	templateUrl: './chargements.component.html'
})
export class ChargementsComponent {

	chargements: Chargement[];
	private profile: Session;

	constructor(private router: Router,
				private chargementService: ChargementService,
				private session: SessionService){
		this.session.session$.subscribe(s => this.profile = s);
		this.chargementService.getAllChargements()
			.subscribe(res => this.chargements = res,
				e => this.session.logout());
	}

	createChargement(): void{
		this.chargementService.createChargement(this.profile.email).subscribe(res =>{
			if(res.guid) this.router.navigate(['/chargements/', res.guid], {queryParams:{step:'create'}});
		});
	}

	openChargement(guid: String): void{
		if(guid) this.router.navigate(['/chargements/', guid]);
	}

	deleteChargement(guid: String): void{
		this.chargementService.deleteChargement(guid).subscribe(cs =>{
			this.chargements = cs;
			alert('Supprimé');
		});
	}

	getStatus(statutChargement: "CREATED" | "OPEN" | "CLOSED" | "UNDER_WAY" | "ARRIVED" | "ARCHIVED"){
		switch (statutChargement){
			case 'CREATED' : return 'Créé';
			case 'OPEN' : return 'Ouvert';
			case 'CLOSED' : return 'Cloturé';
			case 'UNDER_WAY' : return 'En cours';
			case 'ARRIVED' : return 'Arrivé';
			case 'ARCHIVED' : return 'Archivé';
		}
	}



}