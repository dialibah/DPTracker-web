import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChargementService} from "../chargements/chargements.service";
import {ColisComponent} from "./colis.component";

const routes: Routes = [
	{ path: ':chargementId/:colisId', component: ColisComponent }
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