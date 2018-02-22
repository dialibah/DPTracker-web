import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SessionService, SignupData} from "../components/session/session.service";
import {EmailValidatorDirective} from "../components/validators/email-validator.directive";

import _unset = require("lodash/unset");

/**
 * Created by nureynisow on 17/07/2017.
 */

@Component({
	selector: 'dpt-signup',
	templateUrl: 'signup.component.html'
})
export class SignupComponent {

	signupForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private sessionService: SessionService
	) {
		this.signupForm = this.fb.group({
			'email': ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
			'username': ['', []],
			'password': ['', [Validators.required, Validators.minLength(6)]],
			'passwordConfirm': ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	onSubmit(){

		const signupData = this.signupForm.value;
		if(signupData.password === signupData.passwordConfirm && _unset(signupData, "passwordConfirm")) {
			this.sessionService.createUser(signupData)
				.subscribe(registeredUser => {
					alert("OK");
				}, err => {
					alert("Ce pseudo existe déjà");
				});
		}else{
			alert('Vérifiez les mots de passe');
		}
	}

}