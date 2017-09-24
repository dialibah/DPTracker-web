/**
 * Created by nureynisow on 05/08/2017.
 */

import {Component, TemplateRef, ViewChild} from "@angular/core";

import {ModalDirective} from "ng2-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ColisService} from "./colis.service";

@Component({
	selector: 'dpt-colis',
	templateUrl: './colis.component.html'
})
export class ColisComponent {

	showAForm:boolean = false;
	showNextPage:boolean = false;
	form:FormGroup;

	constructor(private formBuilder: FormBuilder,
				private colisService:ColisService){
		this.form = formBuilder.group({
			type: ['',[]],
			depart: ['',[]],
			destination: ['',[]],
			date: ['',[]],
			poids: ['',[]],
			hauteur: ['',[]],
			longueur: ['',[]],
			largeur: ['',[]],
			societeExped: ['',[]],
			nomExped: ['',[]],
			telephoneExped: ['',[]],
			emailExped: ['',[]],
			adresseExped: ['',[]],
			paysExped: ['',[]],
			codePostalExped: ['',[]],
			villeExped: ['',[]],
		});
	}

	showForm(){
		this.showAForm = true;
	}

	showNext() {
		this.showNextPage = true;
		this.showAForm = false;
	}

	backFirst() {
		this.showNextPage = false;
		this.showAForm = true;
	}

	saveColis() {
		console.log("Enregistrement colis");
	}
}