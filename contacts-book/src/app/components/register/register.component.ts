import { Component, OnInit, Inject} from '@angular/core';
import {RegisterRequest} from '../../models/register-request';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerRequest= new RegisterRequest('','','');
  public error:string|null=null;

  constructor(@Inject(AuthService) private authService:AuthService){

}
  register(){
        this.authService.register(this.registerRequest)
    .subscribe(r=>{
      if(!r.isSuccessful()) 

        this.error=r.error;
    }, 
    ()=>this.error='Error!!!'
    );
  }

  ngOnInit():void{
    this.error=null;
    this.registerRequest.clean();
  }

}
