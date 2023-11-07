import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImage'
})
export class WeatherImagePipe implements PipeTransform {
  THUNDER = '../../../assets/img/thunderstorm.png'; //200
  DRIZZLE = '../../../assets/img/drizzle.png'; //300
  RAIN = '../../../assets/img/raining.png'; //500
  SNOW = '../../../assets/img/snow.png'; //600
  MIST = '../../../assets/img/haze.png'; //700
  SUN = '../../../assets/img/sun.png'; //800
  CLOUD = '../../../assets/img/clouds.png';//801

  transform(id: number): string {
    if (id <300){
      return this.THUNDER;
    }
    if(id <400) {
      return this.DRIZZLE;
    }
    if(id<600) {
      return this.RAIN;
    }
    if(id<=700) {
      return this.SNOW;
    }
    if(id<= 799) {
      return this.MIST;
    }
    if(id === 800) {
      return this.SUN;
    }
    return this.CLOUD;
  }

}
