import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ChargementComponent} from "./chargement.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChargementService} from "./chargement.service";

const routes: Routes = [
	{ path: '', component: ChargementComponent }
];

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [ChargementComponent],
	providers: [ChargementService]
})
export class ChargementModule {

}