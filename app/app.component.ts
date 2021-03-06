import {Component} from "@angular/core";
import {SessionService} from "./components/session/session.service";
import {ConfigurationService} from "./components/conf/configuration.service";
import {ApiHttpClient} from "./components/http/api-http-client.service";

@Component({
	selector: 'dpt-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(
		private session: SessionService,
		private conf: ConfigurationService,
		private http: ApiHttpClient
	) {
		//session configuration
		this.session.load();

		//api client configuration
		this.http.baseUrl = this.conf.getAsString("api");
		// this.session.session$.subscribe(p => console.log('new session value', p));
		// this.session.login$.subscribe(p => console.log("logged in"));
		// this.session.logout$.subscribe(p => console.log("logged out"));
	}
}
