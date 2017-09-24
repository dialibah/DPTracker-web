import {Injectable} from "@angular/core";
import {ApiHttpClient} from "../components/http/api-http-client.service";
import {Observable} from "rxjs/Observable";
import {Chargement} from "./chargements.modele";

@Injectable()
export class ChargementService {

	constructor(private http: ApiHttpClient){
	}

	createChargement():Observable<Chargement>{
		return this.http.post('/chargements',{})
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

}