import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getdata(){
    let url="https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b190a0605344cc4f3af08d0dd473dd25";
    return this.http.get(url);
  }
}
