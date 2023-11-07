import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';

@Component({
  selector: 'app-next-days',
  templateUrl: './next-days.component.html',
  styleUrls: ['./next-days.component.scss']
})
export class NextDaysComponent {

  @Input() nextDaysWeather: Weather[]
  moreInfo:boolean;

  constructor() {
    this.moreInfo=false;
    this.nextDaysWeather=[];
  }

}
