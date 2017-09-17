/**
	* Created by nureynisow on 05/08/2017.
	* for DPTracker
	*/

import {Component, OnInit} from "@angular/core";
import {Profile, Session, SessionService} from "../components/session/session.service";

@Component({
	selector: 'dpt-admin',
	templateUrl: 'admins.component.html'
})
export class AdminsComponent implements OnInit{

	profile : Session;
	users : Profile[];

	constructor(private session: SessionService) {
	}

	ngOnInit(): void {
		this.session.session$.subscribe(s => this.profile = s);
		this.session.getAllUsers().subscribe(allUsers => this.users = allUsers);
	}

	activateToggle(id:string) {
		this.session.activateUser(id).subscribe(res => this.session.getAllUsers().subscribe(allUsers => this.users = allUsers));
	}
}