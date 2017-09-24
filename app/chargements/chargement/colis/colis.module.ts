import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ChargementService} from "../../chargements.service";
import {ColisComponent} from "./colis.component";
/**
 * Created by nureynisow on 24/09/2017.
 */


const routes:Routes = [
	{ path: '', component: ColisComponent}
];


@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [ColisComponent],
	providers: [ChargementService]
})
export class ColisModule {

}