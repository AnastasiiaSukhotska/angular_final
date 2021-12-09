import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GetUserResponse} from '../models/get-user-response';
import {Observable} from 'rxjs';
import {Links} from '../config/links';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(@Inject(HttpClient) private http:HttpClient) { }
  public getAll():Observable<GetUserResponse>{
   return this.http.get(Links.url("/users"))
    .pipe(map(r=>GetUserResponse.fromJson(r)))
  }
}


