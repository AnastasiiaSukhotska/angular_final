import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginRequest} from '../models/login-request';
import {LoginResponse} from '../models/login-response';
import {RegisterResponse} from '../models/register-response';
import {RegisterRequest} from '../models/register-request';
import {Observable, Subject} from 'rxjs';
import {Links} from '../config/links';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string|null=null;
  public authSubject:Subject<null>=new Subject<null>();
  public logoutSubject:Subject<null>=new Subject<null>();


  constructor(@Inject(HttpClient) private http:HttpClient) { }
  public auth(loginRequest:LoginRequest):Observable<LoginResponse>{
   return this.http.post(Links.url("/login"), loginRequest)
    .pipe(map(r=>LoginResponse.fromJson(r)))
    .pipe(tap(r=>{
      if (r.isSuccessful()){
        this.authenticate(r.token);
      }
    }))
  }

  public register(r:RegisterRequest):Observable<RegisterResponse>{
   return this.http.post(Links.url("/register"), r.toJson())
    .pipe(map(r=>RegisterResponse.fromJson(r)))
   
  }

  private authenticate(token: string|null){
    this.token=token;
    this.authSubject.next(null);
  }
  public logout(){
    this.token=null;
    this.logoutSubject.next(null);
  }
  public getToken():string|null{
    return this.token;
  }
  public isAuth():boolean{
    return this.token!=null;
  }

  public isRegister():boolean{
     return this.token!=null;
  }

}
