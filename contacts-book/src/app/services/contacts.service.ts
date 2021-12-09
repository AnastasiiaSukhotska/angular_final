import { Injectable, Inject } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Links} from '../config/links';
import {map, tap} from 'rxjs/operators';
import {GetContactResponse} from '../models/get-contact-response';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(@Inject(AuthService) private authService:AuthService, @Inject(HttpClient) private http:HttpClient) { }
  public getContacts():Observable<any>{

    let token=this.authService.getToken();
    console.log(token);
    return this.http.get(Links.url('/contacts'),{
      headers: {
        'Authorization': 'Bearer'+token,
        'Accept':'application/json',
        'Content-Type':'application/json'


      }
    }).pipe(tap(r=>GetContactResponse.fromJson(r)));
  }
}





