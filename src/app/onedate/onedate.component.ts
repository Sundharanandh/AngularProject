import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onedate',
  templateUrl: './onedate.component.html',
  styleUrls: ['./onedate.component.css']
})
export class OnedateComponent implements OnInit {

  constructor(private http:HttpClient) { }
  particular_date:any
  m:any
  mode=false

  ngOnInit(): void {
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

  changemode(elem: HTMLElement,elem1:HTMLElement){
    this.mode=!this.mode
    if(this.mode==false){
      elem.className='container'
      elem1.className='button-mode'
    }else{
      elem.className='container-dark'
      elem1.className='button-mode-dark' 

    }
  }

}
