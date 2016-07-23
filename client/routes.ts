import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Type } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseComponent } from './components/course/course.component';
import { EventInformationComponent } from './components/event_information/event_information.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ResultsComponent } from './components/results/results.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';

const routes: RouterConfig = [
    { path: '', component: <Type>HomeComponent },
    { path: 'contact', component: <Type>ContactComponent },
    { path: 'course', component: <Type>CourseComponent },
    { path: 'event_information', component: <Type>EventInformationComponent },
    { path: 'photos', component: <Type>PhotosComponent },
    { path: 'results', component: <Type>ResultsComponent },
    { path: 'sponsors', component: <Type>SponsorsComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];
