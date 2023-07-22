import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor(private router:Router,private http:HttpClient,private aouth:AuthService) { }

  ngOnInit(): void {
  }
  name=""
  pwd=""
  message:string=""
  imgSrc='assets/shar.png'
  mode=false

  onlogin(){
    
    this.http.post('http://127.0.0.1:5000/signin',{'username':this.name,'password':this.pwd}).subscribe((response:any)=>{
      console.log(response.resp)
      this.message=response.resp
      if(this.message=="Login Successful"){
        this.aouth.boolauthlogin=true
        this.router.navigateByUrl('/fileupload')

      }
  })
  }


  gotoregister(){
    this.router.navigateByUrl('/')
  }


  changemode(elem: HTMLElement,elem1:HTMLElement){
    this.mode=!this.mode
    if(this.mode==false){
      elem.className='body'
      elem1.className='button-mode'
    }else{
      elem.className='body-dark'
      elem1.className='button-mode-dark' 

    }
  }
  

}
