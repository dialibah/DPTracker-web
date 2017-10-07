import {Injectable} from "@angular/core";
import {StoreService} from "../store/store.service";
import {Headers} from "@angular/http";
import {ConfigurationService} from "../conf/configuration.service";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {ApiHttpClient} from "../http/api-http-client.service";
import {Router} from "@angular/router";

export interface Address {
	line: string;
	line2?: string;
	zipCode: string;
	city: string;
}

export interface Profile {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	username: string;
	token: string;
	active:boolean;
}

export interface Session extends Profile{
}

export interface Credentials {
	email: string;
	password: string;
}

export interface SignupData {
	email: string;
	username: string;
	password: string;
}

@Injectable()
export class SessionService {

	private sessionKey = "session";

	public session$: Observable<Session> = new BehaviorSubject(null);
	public islogged$: Observable<boolean> = this.session$.map(p => !!p);
	public login$: Observable<any> = new Subject();
	public logout$: Observable<any> = new Subject();

	constructor(
		private store: StoreService,
		private router: Router,
		private http: ApiHttpClient
	) {
	}

	load() {
		const session: Session = this.store.get(this.sessionKey);
		if (!session) return;
		(<Subject<any>>this.logout$).next();
		this.openSession(session);
	}

	login(credentials: Credentials) {
		const options = {
			headers: new Headers({ 'Content-Type': 'application/json' })
		};

		return this.http.post("/user/login", credentials, options)
			.map(res => res.json())
			.catch(error => Observable.throw(error.json().error || 'Server error'))
			.do(
				res => {
					this.openSession(res);
					(<Subject<any>>this.login$).next();
					return <Session>res;
				}
			);
	}

	createUser(signupData: SignupData){
		this.closeSession();
		return this.http.post("/user/signup", signupData)
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	logout() {
		this.closeSession();
		(<Subject<any>>this.logout$).next();
		this.router.navigate(['']);
	}

	getAllUsers():Observable<Profile[]>{
		return this.http.get("/user")
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	updateUser(id:string, patch:any){
		return this.http.patch(`/user/${id}`, patch )
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	private openSession(session: Session) {
		this.store.set(this.sessionKey, session);
		(<BehaviorSubject<Session>>this.session$).next(session);
		this.http.addDefaultHeader(ApiHttpClient.AUTHORIZATION_HEADER, session.token);
	}

	private closeSession() {
		this.store.del(this.sessionKey);
		(<BehaviorSubject<Session>>this.session$).next(null);
		this.http.deleteDefaultHeader(ApiHttpClient.AUTHORIZATION_HEADER);
	}

	activateUser(id: string):Observable<Profile> {
		return this.http.patch(`/user/${id}/activateToggle`, {})
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}
}