import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AdminsComponent} from "./admins.component";

const routes: Routes = [
	{ path: '', component: AdminsComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [AdminsComponent]
})
export class AdminsModule {

}