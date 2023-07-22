import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  fudata:any;
  joy=true
  constructor(private user:WeatherService) { }

  ngOnInit(): void {
  }
  getme(){ 
    this.joy=false

    this.user.getdata().subscribe(data=>this.fudata=data);
  }
}
