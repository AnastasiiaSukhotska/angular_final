
import { Component, OnInit, Inject } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {ContactsService} from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isAuth:boolean=false;
  constructor(
    @Inject(AuthService) public authService:AuthService,
     @Inject(ContactsService) public contactsService:ContactsService,
    @Inject(Router) private router:Router
    ) {
    this.isAuth=authService.isAuth();
    this.authService.authSubject.subscribe(n=>{
      this.isAuth=true;
      this.router.navigate(['contacts']);
    });
    this.contactsService.addedSubject.subscribe(n=>{
      this.router.navigate(['contacts']);
    })
    this.authService.logoutSubject.subscribe(n=>this.isAuth=false);
   }

}
