
import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAuth:boolean=false;
  constructor(
    @Inject(AuthService) private authService:AuthService,
    @Inject(Router) private router:Router
    ) {
    this.isAuth=authService.isAuth();
    this.authService.authSubject.subscribe(n=>{
      this.isAuth=true;
      this.router.navigate(['users']);
    });
    this.authService.logoutSubject.subscribe(n=>this.isAuth=false);
   }
}
