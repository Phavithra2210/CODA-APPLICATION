import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginServiceService } from "E:/BOSCH/pavi/pavi/angular/front/src/app/login-service.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public message="";
  username: string='';
  password: string='';

  constructor(private loginService:LoginServiceService,private router: Router) { }

  public onSubmit()
  {
    var userModel={
      username:this.username,
      password:this.password
    }
    console.log(userModel.username + userModel.password);
    
    this.loginService.authenticate(userModel).subscribe(
      data  =>{
         console.log("success"+data);
          this.router.navigateByUrl("/jobList")
      },
      err => 
      { this.message="User name / password is incorrect";
    }
    ) 
  }
  ngOnInit(): void {
  }

}
