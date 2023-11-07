import { Injectable } from '@angular/core';
import { Weather } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  rowMapper(json:any) {
    const {dt, weather, temp, humidity, wind } = json
    return new Weather(dt, weather.id, weather.main, temp, humidity, wind)
  }
}
