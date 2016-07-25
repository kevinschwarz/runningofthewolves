import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    providers: [],
    template: `<div class="ui container">
        <div class="row">
            <div class="col-md-3 text-center" style="padding-bottom: 25px;">
                <img src="/assets/img/pawprint.jpg" width="150" hieght="150" alt="paw print" />
            </div>
            <div class="col-md-9">
                <h1>Running of the Wolves 5K and 1 Mile Fun Run</h1>
                <h4>Liberty Pines Academy PTO 5K Race Event</h4>
                <h4>October 16<sup>th</sup>, 2016</h4>
            </div>
        </div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <!--<li class="active"><a [routerLink]="['/event_information']">Event Information <span class="sr-only">(current)</span></a></li>-->
                        <li><a [routerLink]="['/']">Home</a></li>
                        <li><a [routerLink]="['/event_information']">Event Information</a></li>
                        <li><a [routerLink]="['/course']">Course</a></li>
                        <li><a [routerLink]="['/photos']">Photos</a></li>
                        <li><a [routerLink]="['/results']">Results</a></li>
                        <li><a [routerLink]="['/sponsors']">Sponsors</a></li>
                        <li><a [routerLink]="['/contact']">Contact</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a [routerLink]="['/pto']">PTO </a> </li> 
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>        
    </div>`
})

export class AppComponent {}