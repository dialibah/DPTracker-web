import {Component} from "@angular/core";
import {Profile, SessionService} from "../components/session/session.service";

@Component({
	selector: 'dpt-home',
	templateUrl: 'home.component.html'
})
export class HomeComponent {
	profile: Profile;
	constructor(private session: SessionService) {
		this.session.session$.subscribe(s => this.profile = s);
	}
}