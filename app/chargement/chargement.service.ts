
import {Injectable} from "@angular/core";
import {ApiHttpClient} from "../components/http/api-http-client.service";

@Injectable()
export class ChargementService {

	constructor(private http: ApiHttpClient){
	}
	// C POST
	// R GET
	// U PUT
	// D DELETE

	createChargement(chargement:any){
		this.http.post('/chargement',chargement).subscribe(res => {
			console.log(res);
		}, err => {
			console.log(err);
		});
	}

}