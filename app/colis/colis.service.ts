
import {Injectable} from "@angular/core";
import {ApiHttpClient} from "../components/http/api-http-client.service";

@Injectable()
export class ColisService {

	constructor(private http: ApiHttpClient){
	}
	// C POST
	// R GET
	// U PUT
	// D DELETE

	addColisToChargement(){
	/*	this.http.post('/chargement').subscribe(res => {
			console.log(res);
		}, err => {
			console.log(err);
		});*/
	}

}