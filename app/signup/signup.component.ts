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
			'email': ['', []],
			'username': ['', []],
			'password': ['', []],
			'passwordConfirm': ['', []]
		});
	}

	onSubmit(){
		const signupData = this.signupForm.value;
		if(signupData.password === signupData.passwordConfirm && _unset(signupData, "passwordConfirm")) {
			this.sessionService.createUser(signupData)
				.subscribe(registeredUser => {
					alert("OK");
				});
		}else{
			alert('Not same pwd');
		}
	}

}