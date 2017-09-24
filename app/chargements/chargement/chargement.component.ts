import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
/**
	* Created by nureynisow on 22/09/2017.
	* for DPTracker
	*/

@Component({
	selector: 'dpt-chargement',
	templateUrl: './chargement.component.html'
})
export class ChargementComponent implements OnInit{
	guid: string;

	constructor(private routerService:ActivatedRoute){}

	ngOnInit(): void {
		this.routerService.params.subscribe(p => {
			this.guid = p['id'];
		})
	}


}