  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent implements OnInit {

    constructor(private router:Router,private http:HttpClient) { }

    regname=""
    regpwd=""
    message=""

    ngOnInit(): void {
    }
    gotologin(){
      this.router.navigateByUrl('/login')
    }
    register_of(){
      this.http.post('http://127.0.0.1:5000/register-user',{'username':this.regname,'password':this.regpwd}).subscribe((response:any)=>{
        console.log(response.resp)
        this.message=response.resp
        
      })
    }

  }
