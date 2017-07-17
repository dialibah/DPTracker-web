import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SessionService} from "../components/session/session.service";
import {EmailValidatorDirective} from "../components/validators/email-validator.directive";
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
		private formBuilder: FormBuilder,
		private router: Router,
		private session: SessionService
	){
		this.signupForm = this.formBuilder.group({
			'email': [
				'', [
					Validators.required,
					EmailValidatorDirective.validEmail
				]
			],
			'password': [
				'', [Validators.required]
			],
			'passwordConfirm': [
				'', [Validators.required]
			]
		});
	}



}