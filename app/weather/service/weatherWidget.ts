import { Injectable } from "@angular/core";
import { API_KEY, ROOT_URL } from '../constants/constants';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

export class WeatherService {
    constructor(private jsonp: Jsonp) {

    }
    getCurrentLocation(): Observable<any> {
        if (navigator.geolocation) {
            return Observable.create((observer) => {
                navigator.geolocation.getCurrentPosition(pos => {
                    observer.next(pos);
                }),
                    err => {
                        return Observable.throw(err);
                    }
            })
        } else {
            return Observable.throw('Geolocation not working right now');
        }
    }

    getCurrentWeather(lat: number, long: number): Observable<any> {
        const url = ROOT_URL + API_KEY + "/" + lat + "," + long;
        const queryParams = "?callback=JSONP_CALLBACK";

        return this.jsonp.get(url + queryParams)
            .map(data => data.json())
            .catch(err => {
                console.error("Unable to get weather data - ", err);
                return Observable.throw(err.json());
            });
    }
};