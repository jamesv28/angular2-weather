"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var weatherWidget_1 = require('../service/weatherWidget');
var WeatherWidget = (function () {
    function WeatherWidget(service) {
        var _this = this;
        this.service = service;
        this.service.getCurrentLocation()
            .subscribe(function (position) {
            _this.pos = position;
            _this.service.getCurrentWeather(_this.pos.coords.latitude, _this.pos.coords.longitude).subscribe(function (weather) { console.log(weather); }, function (err) { console.log('error', err); });
        }, function (err) { console.error(err); });
    }
    WeatherWidget = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'weather-widget',
            templateUrl: 'weatherWidget.html',
            styleUrls: ['weatherWidget.css'],
            providers: [weatherWidget_1.WeatherService]
        }), 
        __metadata('design:paramtypes', [weatherWidget_1.WeatherService])
    ], WeatherWidget);
    return WeatherWidget;
}());
exports.WeatherWidget = WeatherWidget;
;
//# sourceMappingURL=weatherWidget.js.map