import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  @Input() weather: Weather;
  @Input() moreInfo: boolean;

  constructor() {
    this.moreInfo=false;
    this.weather=new Weather('',0 ,'',0,0,0);
  }

}
