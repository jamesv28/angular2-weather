import { Component } from '@angular/core';
import {WeatherWidget} from './weather/component/weatherWidget';
@Component({
    selector: 'my-app',
    template: `
                <div class="row">
                    <div class="container-fluid">
                        <weather-widget></weather-widget>
                    </div>
                </div>
               `
})
export class AppComponent { }