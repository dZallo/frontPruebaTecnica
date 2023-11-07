import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { NextDaysComponent } from './components/next-days/next-days.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherImagePipe } from './pipes/weather-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    NextDaysComponent,
    FlightCardComponent,
    WeatherImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
