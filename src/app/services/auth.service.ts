import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, LoginResponse } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL= 'http://localhost:8090/api/v1/'

  constructor(private _http:HttpClient) { }


  register(formData:FormData):Observable<AuthResponse>{
    return this._http.post<AuthResponse>(this.BASE_URL+'auth/register',formData);
  }

  login(formData:FormData):Observable<LoginResponse>{
    return this._http.post<LoginResponse>(this.BASE_URL+'auth/login',formData);
  }
}
