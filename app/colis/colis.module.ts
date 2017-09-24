import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ColisComponent} from "./colis.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColisService} from "./colis.service";

const routes: Routes = [
	{ path: '', component: ColisComponent }
];

@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [ColisComponent],
	providers: [ColisService]
})
export class ColisModule {

}