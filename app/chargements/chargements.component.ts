/**
 * Created by nureynisow on 05/08/2017.
 * for DPTracker
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ChargementService} from "./chargements.service";

@Component({
	selector: 'dpt-chargements',
	templateUrl: './chargements.component.html'
})
export class ChargementsComponent {

	constructor(private router: Router,
				private chargementService:ChargementService){
	}

	createChargement():void{
		this.chargementService.createChargement().subscribe(res => {
			if(res.guid) this.router.navigate(['/chargements/', res.guid]);
		})
	}
}