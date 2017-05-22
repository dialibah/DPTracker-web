import {NgModule, ValueProvider} from "@angular/core";
import {AppComponent} from "./app.component";
import {CoreModule} from "./components/core/core.module";
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Http} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {SharedModule} from "./components/shared/shared.module";

const WINDOW_PROVIDER: ValueProvider = {
	provide: Window,
	useValue: window
};

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' }
];

export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './translations/', '.json');
}

@NgModule({
	providers: [
		WINDOW_PROVIDER
	],
	imports: [
		CommonModule,
		FormsModule,
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		BrowserModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [Http]
			}
		}),

		CoreModule,
		SharedModule.forRoot()
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
