import {NgModule, ValueProvider} from '@angular/core';
import {AppComponent} from "./app.component";
import {CoreModule} from "./components/core/core.module";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF, CommonModule } from '@angular/common';
import {SharedModule} from "./components/shared/shared.module";
import {CollapseDirective} from "ng2-bootstrap";

const WINDOW_PROVIDER: ValueProvider = {
	provide: Window,
	useValue: window
};

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'admins', loadChildren: './admins/admins.module#AdminsModule'},
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	{ path: 'chargements', loadChildren: './chargements/chargements.module#ChargementsModule' },
	{ path: 'colis', loadChildren: './colis/colis.module#ColisModule' },
	{ path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
];

@NgModule({
	providers: [
		WINDOW_PROVIDER,
		{ provide: APP_BASE_HREF, useValue: process.env.baseHref }
	],
	imports: [
		CommonModule,
		FormsModule,
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		BrowserModule,
		CoreModule,
		SharedModule.forRoot()
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		CollapseDirective
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
