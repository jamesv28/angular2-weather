import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weatherWidget';
import { Weather } from '../model/weather';
declare var Skycons: any;

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weatherWidget.html',
    styleUrls: ['weatherWidget.css'],
    providers: [WeatherService]
})

export class WeatherWidget implements OnInit {
    pos: Position;
    weatherData = new Weather(null, null, null, null, null);
    currentSpeedUnit = "mph";
    icons = new Skycons({"color": "#ff00de"});

    constructor(private service: WeatherService) {
       
    }

    ngOnInit() {
        this.getCurrentLocation();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.getCurrentWeather();
            },
            err => { console.error(err) })
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather['currently']['temperature'];
                this.weatherData.summary = weather['currently']['summary'];
                this.weatherData.wind = weather['currently']['windSpeed'];
                this.weatherData.humidity = weather['currently']['humidity'];
                this.weatherData.icon = weather['currently']['icon'];
                this.setIcons();
                console.log('icons',this.icons);
                console.log('weather', this.weatherData);
            }
            , err => { console.log('error', err) });
    }
    setIcons() {
        this.icons.add("icon",this.weatherData.icon);
        this.icons.play();
    }


}   // end of class
