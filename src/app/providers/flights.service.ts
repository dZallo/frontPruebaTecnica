import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight.model';


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private readonly ENDPOINT_URL = "http://localhost:3000/flight"

  constructor(private http: HttpClient) { }

  getFlights(values:any): Observable<any> {
    const {from, to, startDate, endDate} = values
    return this.http.get(this.ENDPOINT_URL,{
      params:{
        from,
        to,
        startDate,
        endDate
      }
    })
  }


  rowMapper(json:any) {
    const {companyName, duration, airportLeave, airportArrive, price } = json
    return new Flight(companyName, duration, airportLeave, airportArrive, price)
  }
}
