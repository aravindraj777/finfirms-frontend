import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { authResponse } from '../models/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL= 'http://localhost:8090/api/v1/'

  constructor(private _http:HttpClient) { }


  register(formData:FormData):Observable<authResponse>{
    return this._http.post<authResponse>(this.BASE_URL+'auth/register',formData)
  }
}
