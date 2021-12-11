import { Component, OnInit, Inject } from '@angular/core';
import {LoginRequest} from '../../models/login-request';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginRequest=new LoginRequest('','');
  public error:string|null=null;

constructor(@Inject(AuthService) private authService:AuthService){

}

  login(){
      if(!this.loginRequest.login||!this.loginRequest.password){
      alert('Fill form')
      return;
    } 
    this.authService.auth(this.loginRequest)
    .subscribe(r=>{
      if(!r.isSuccessful()) this.error=r.error;
    }, 
    ()=>this.error='Error!!!'
    );
  }

  ngOnInit():void{
    this.error=null;
    this.loginRequest.clean();
  }

}
