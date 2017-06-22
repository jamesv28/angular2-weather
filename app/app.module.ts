import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {WeatherWidget} from './weather/component/weatherWidget';
@NgModule({
    imports: [ BrowserModule, JsonpModule ],
    declarations: [ AppComponent,WeatherWidget ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }