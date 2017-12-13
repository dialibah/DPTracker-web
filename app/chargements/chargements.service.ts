import {Injectable} from "@angular/core";
import {ApiHttpClient} from "../components/http/api-http-client.service";
import {Observable} from "rxjs/Observable";
import { Chargement, Colis } from './chargements.modele';

@Injectable()
export class ChargementService {

	constructor(private http: ApiHttpClient){
	}

	createChargement(createdBy:string):Observable<Chargement>{
		return this.http.post('/chargements',{createdBy})
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	getAllChargements():Observable<Chargement[]> {
		return this.http.get('/chargements')
			.map(res => res.json())
			.catch(err => Observable.throw('Server Error'));
	}

	addColis(guid: string, createdBy:string) {
		return this.http.post(`/chargements/${guid}/colis`, {createdBy})
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	getChargement(chargementId: string):Observable<Chargement> {
		return this.http.get(`/chargements/${chargementId}`)
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	updateChargement(guid: string, chargement: Chargement):Observable<Chargement> {
		return this.http.put(`/chargements/${guid}`, chargement)
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	getColis ( chargement: string, colis: string): Observable<Colis> {
		return this.http.get(`/chargements/${chargement}/colis/${colis}`)
			.map(res => res.json())
			.catch(error => Observable.throw('Server Error'));
	}

	updateColis(chargementId: string, guid: string, colis: Colis):Observable<Colis>{
		return this.http.put(`/chargements/${chargementId}/colis/${guid}`, colis)
				   .map(res => res.json())
				   .catch(error => Observable.throw('Server Error'));

	}

	deleteChargement(chargementId: String){
		return this.http.delete(`/chargements/${chargementId}`)
				   .map(res => res.json())
				   .catch(error => Observable.throw('Server Error'));
	}

	deleteColis(chargementId: string, colisId: String){
		return this.http.delete(`/chargements/${chargementId}/colis/${colisId}`)
				   .map(res => res.json())
				   .catch(error => Observable.throw('Server Error'));
	}
}