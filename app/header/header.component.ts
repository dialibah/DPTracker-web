import {Component} from "@angular/core";
import {SessionService, Profile, Session} from "../components/session/session.service";

@Component({
	selector: 'dpt-header',
	templateUrl: 'header.component.html'
})
export class HeaderComponent {
	profile: Profile;
	isCollapsed: boolean = true;
	constructor(private session: SessionService) {
		this.session.session$.subscribe(s => this.profile = s);
	}

	logout(){
		this.session.logout();
	}
}