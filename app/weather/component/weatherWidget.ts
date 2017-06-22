import { Component } from '@angular/core';
import { WeatherService } from '../service/weatherWidget';
@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weatherWidget.html',
    styleUrls: ['weatherWidget.css'],
    providers: [WeatherService]
})

export class WeatherWidget {
    pos: Position;
    constructor(private service: WeatherService) {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude).subscribe(weather => { console.log(weather) }, err => { console.log('error', err) });
            },
            err => { console.error(err) })

    }
};