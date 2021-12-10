import { Injectable, Inject } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Links} from '../config/links';
import {map, tap} from 'rxjs/operators';
import {GetContactResponse} from '../models/get-contact-response';
import {AddContactResponse} from '../models/add-contact-response';
import {AddContactRequest} from '../models/add-contact-request';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
private contactsSubject:Subject<Contact[]>=new Subject<Contact[]>();
 private contacts:Contact[]=[];
 private active:Contact|null=null;
 
 private activeContactSubject:Subject<Contact|null>=new Subject();

  constructor(@Inject(AuthService) private authService:AuthService, @Inject(HttpClient) private http:HttpClient) { }
  
  public getContacts():Observable<any>{
      let token=this.authService.getToken();
    return this.http.get(Links.url('/contacts'),{
      headers: {
        'Authorization': 'Bearer '+token,
        'Accept':'application/json',
        'Content-Type':'application/json'


      }
    }).pipe(tap(r=>GetContactResponse.fromJson(r)));

  }


  public addContacts(addContactRequest:AddContactRequest):Observable<AddContactResponse>{
    let token=this.authService.getToken();
    console.log(token);
   return this.http.post(Links.url("/contacts/add"), addContactRequest, {
    headers: {
        'Authorization': 'Bearer '+token,
        'Accept':'application/json',
        'Content-Type':'application/json'
      }

      })
    .pipe(map(r=>AddContactResponse.fromJson(r)))
    .pipe(tap(r=>(console.log(r))))

    

  }
public activateContact(contact: Contact|null){
    this.active=contact;
    this.activeContactSubject.next(contact);
  }

  public getActiveContact():Observable<Contact|null>{
    return this.activeContactSubject;
  }



}





