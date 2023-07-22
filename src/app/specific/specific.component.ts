import { Component, HostBinding, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  @HostBinding('class') className='full-container';

  fromdate:any;
  darktheme=true
  todate:any;
  stats_contnt_bool=true
  statsbool=true
  getcbool=false
  chartbool=true
  darkmodebool=new FormControl(false)
  mode=false

  //*chart

  chart:any;
  actual_sales:any
  predicted_sales:any
  dates:any
  graph_value:any
  //*user ip vars
  user_chart:any
  future_user_date:any
  future_sales:any

  //*custom_date
  custom_date:any;
  predicted_value:any;

  


  //* stat variables
  accuracy:any;
  rmse:any;
  mape:any;
  
  


  constructor(private http:HttpClient){Chart.register(...registerables)}
  ngOnInit(): void {
    
  }
  
  getstatus(){
    this.stats_contnt_bool=false
  }

  onSelectgraph(value:string){
    this.graph_value=value
  } 

  changemode(elem: HTMLElement,elem1:HTMLElement,usa1:HTMLElement,usa2:HTMLElement,usa3:HTMLElement,usa4:HTMLElement){
    this.mode=!this.mode
    if(this.mode==false){
      elem.className='full-container'
      elem1.className='button-mode'
      usa1.className='bgc'
      usa2.className='bgc'
      usa3.className='bgc'
      usa4.className='bgc'

      
    }else{
      elem.className='full-container-dark'
      elem1.className='button-mode-dark' 
      usa1.className='bgc-dark'
      usa2.className='bgc-dark'
      usa3.className='bgc-dark'
      usa4.className='bgc-dark'


    }
  }
  


  generate_chart(){
    if(this.fromdate==null || this.todate==null){ 
      alert("Specify dates")
    }else if(this.graph_value==null){
      alert('Select chart type')
    }
    else{
      this.chartbool=false
      let url='http://localhost:5000/specific_dates';
      this.http.post(url,{'from':this.fromdate,'to':this.todate}).subscribe((response:any)=>{
        this.dates=JSON.parse(response.dates);
        this.actual_sales=JSON.parse(response.actual)
        this.predicted_sales=JSON.parse(response.predicted)
        this.future_user_date=JSON.parse(response.future_user_date)
        this.future_sales=JSON.parse(response.future_sales)
        this.mape=JSON.parse(response.mape)
        this.rmse=JSON.parse(response.rmse)
        this.accuracy=JSON.parse(response.accuracy)

        this.chart=new Chart('canvas',{
          type:this.graph_value,
          data:{
            labels:this.dates, 
            datasets:[
              {
                label:'Actual Sales',
                data:this.actual_sales,
                borderColor:'#3cba9f',
                backgroundColor:'#ffffff'            
              },
              {
                label:'Predicted Sales',
                data:this.predicted_sales,
                borderColor:'#ffcc00',
                backgroundColor:'#00ff00'
              }
            ]
          }
        })
        this.statsbool=false
        this.user_chart=new Chart('canvas1',{
          type:this.graph_value,
          data:{
            labels:this.future_user_date,
            datasets:[
              {
                label:'User Prediction',
                data:this.future_sales,
                borderColor:'#ffcc00',
                backgroundColor:'#00ff00'
              }
            ]
          }
        })
      })
    }
  }

}
