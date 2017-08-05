import {NgModule, ModuleWithProviders} from "@angular/core";
import {EmailValidatorDirective} from "../validators/email-validator.directive";
import {ReactiveFormsModule} from "@angular/forms";

/*
* Here put all the shared directives, components and pipe
* You should import this module in every module where you want to use these shared directives
* */
@NgModule({
	imports: [
		ReactiveFormsModule
	],
	declarations: [
		EmailValidatorDirective
	],
	exports: [
		ReactiveFormsModule,
		EmailValidatorDirective
	]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule
		};
	}
}
