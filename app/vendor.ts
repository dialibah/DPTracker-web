/**
 * all modules required in this file will be placed in a vendor.bundle.js file
 * if you required them again in any other app file, you'll use the version bundled in vendor.bundle.js
 */

/*polyfills*/
// import 'es6-shim';
import 'core-js';
// import 'es7-shim';
import 'web-animations-js';
import 'intl';
import 'intl/locale-data/jsonp/fr.js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

/*angular librairies*/
import '@angular/core';
import '@angular/platform-browser-dynamic';
import '@angular/platform-browser';
import '@angular/forms';
import '@angular/http';
import '@angular/router';


/*todo: import lodash methods here*/

/**
 * Be careful to never import just 'rxjs';
 * in this case you would be importing the *ENTIRE* library which is huge
 */

/*Rx core types*/
import 'rxjs/Subject';
import 'rxjs/Observable';
import "rxjs/BehaviorSubject";

/*Rx static methods*/
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/combineLatest';


/*Rx operators*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';

/*moment*/
import 'moment';