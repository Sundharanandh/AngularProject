import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent implements OnInit {

  certain_bool=true
  particular_date:any 
  m:any

  constructor(private router:Router,private http:HttpClient) { }
 
  ngOnInit(): void {
  }

  specific(){
    this.router.navigateByUrl('/specific_date')
  }

  predictfromnow(){
    this.router.navigateByUrl('/predict')
  }
  certain_date(){
    this.certain_bool=false
  }

  particular_sales(){
    if(this.particular_date==null){
      alert("Enter a date")
    }else{
      this.http.post("http://localhost:5000/certain_date",{'date':this.particular_date}).subscribe((resp:any)=>{
      this.m=JSON.parse(resp['sales_val'])
      })
    }
  }

}
