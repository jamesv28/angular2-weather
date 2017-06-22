import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';

import { SpeedUnitPipe } from './weather/pipe/weather-speed';
import { ToDegree } from './weather/pipe/degree';
import { AppComponent } from './app.component';
import { WeatherWidget } from './weather/component/weatherWidget';
@NgModule({
    imports: [BrowserModule, JsonpModule],
    declarations: [AppComponent, WeatherWidget, SpeedUnitPipe,ToDegree],
    bootstrap: [AppComponent]
})

export class AppModule { }