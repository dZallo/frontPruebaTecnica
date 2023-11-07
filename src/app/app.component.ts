import { Component, OnInit } from '@angular/core';
import { FlightsService } from './providers/flights.service';
import { Flight } from './model/flight.model';
import { Weather } from './model/weather.model';
import { WeatherService } from './providers/weather.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front_prueba_tecnica';

  form: FormGroup = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })

  jsonDataResult ={}
  flights: Flight[]
  currenWeather: Weather
  nextDaysWeather: Weather[]
  loading: boolean

  constructor(private formBuilder: FormBuilder, private flightService: FlightsService, private weatherService: WeatherService){
    this.initializeForm()
    this.flights=[]
    this.currenWeather=new Weather('',0 ,'',0,0,0)
    this.nextDaysWeather=[]
    this.loading=false
  }

  ngOnInit(): void {
  }

  initializeForm() {
    this.form = this.formBuilder.group(
      {
        from: ['', Validators.required],
        to: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      }
    )
    
  }

  onSubmit(){
    console.debug('Formulario comprobado: ', this.form.invalid)
    if (this.form.invalid){
      return;
    }
    this.loading=true
    this.getFlights(this.form.value)    
  }

  getFlights(values: any) {
    // console.trace("getFlights")
    this.flightService.getFlights(values).subscribe(jsonData => {
      this.jsonDataResult  = jsonData
      this.flights= jsonData.flights.map( (flight:any)=>  this.flightService.rowMapper(flight))
      this.currenWeather = this.weatherService.rowMapper(jsonData.currentWeather)
      this.nextDaysWeather = jsonData.weatherNextDays.map((weather:any)=> this.weatherService.rowMapper(weather))

      console.debug(this.flights)
      console.debug(this.currenWeather)
      console.debug(this.nextDaysWeather)
      this.loading=false

    })
  }
}
