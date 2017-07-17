import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../components/shared/shared.module";
import {SignupComponent} from "./signup.component";
/**
 * Created by nureynisow on 17/07/2017.
 */


const routes: Routes = [
	{ path: '', component: SignupComponent }
];

@NgModule({
	imports: [
		FormsModule,
		RouterModule.forChild(routes),
		CommonModule,
		SharedModule
	],
	declarations: [SignupComponent]
})
export class SignupModule{

}