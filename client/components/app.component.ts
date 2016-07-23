import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `
    <div class="ui container">
        <div class="row">
            <div class="col-md-3 text-center" style="padding-bottom: 25px;">
                <img src="/assets/img/pawprint.jpg" width="150" hieght="150" alt="paw print" />
            </div>
            <div class="col-md-9">
                <h1>Running of the Wolves</h1>
                <h4>St. Augustine, Florida</h4>
            </div>
        </div>
        <nav class="navbar navbar-default" role="navigation">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['/pto']">PTO</a></li>
                <li class="active"><a [routerLink]="['/']">Event Information <span class="sr-only">(current)</span></a></li>
                <li><a [routerLink]="['/course']">Course</a></li>
                <li><a [routerLink]="['/photos']">Photos</a></li>
                <li><a [routerLink]="['/results']">Results</a></li>
                <li><a [routerLink]="['/sponsors']">Sponsors</a></li>
                <li><a [routerLink]="['/contact']">Contact</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>        
    </div>`
})
export class AppComponent {}