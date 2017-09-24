import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChargementService} from "./chargements.service";
import {ChargementComponent} from "./chargement/chargement.component";
import {ChargementsComponent} from "./chargements.component";

const routes: Routes = [
	{ path: '', component: ChargementsComponent },
	{ path: ':id', component: ChargementComponent },
	{ path: ':id/colis', loadChildren: './chargement/colis/colis.module#ColisModule'}
];

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [ChargementsComponent, ChargementComponent],
	providers: [ChargementService]
})
export class ChargementsModule {

}