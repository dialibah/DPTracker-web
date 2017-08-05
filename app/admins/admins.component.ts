/**
 * Created by nureynisow on 05/08/2017.
 */

import {Component, OnInit} from "@angular/core";
import {Profile, Session, SessionService} from "../components/session/session.service";

import swal from 'sweetalert2';

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

	activate(userEmail:string) {
		console.log(userEmail);
	}

	deActivate(userEmail:string) {
		console.log(userEmail);
	}






}