import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl = "http://localhist:8081/user/login";

  constructor(private httpClient:HttpClient) { }

  loginuser(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);

  }
}
