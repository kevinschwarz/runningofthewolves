import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `<div class="ui container">
        <br />
        <nav class="ui menu inverted blue" >
            <a [routerLink]="['/']" class="item">Home</a>
            <a [routerLink]="['/contact']" class="item">Contact</a>
        </nav>
        <router-outlet></router-outlet>        
      </div>`
})
export class AppComponent {}