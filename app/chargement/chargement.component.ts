/**
 * Created by nureynisow on 05/08/2017.
 */

import {Component, TemplateRef, ViewChild} from "@angular/core";

import {ModalDirective} from "ng2-bootstrap";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChargementService} from "./chargement.service";

@Component({
	selector: 'dpt-chargement',
	templateUrl: './chargement.component.html'
})
export class ChargementComponent {

	showAForm:boolean = false;
	form:FormGroup;

	constructor(private formBuilder: FormBuilder,
				private chargementService:ChargementService){
		this.form = formBuilder.group({
			nom: ['',[]]
		});
	}

	showForm(){
		this.showAForm = true;
	}
	valSave(){
		this.chargementService.createChargement(this.form.value);
	}
}