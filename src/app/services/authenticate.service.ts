import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isauthenticate: boolean = localStorage.getItem('token') ? true : false;
  readonly serviceUrl: string = environment.apiUrl + "Users/authenticate";

  constructor(private http: HttpClient) { }

  login(model: any): Observable<any> {
    const apiUrl = "?userName=" + model.userName + "&password=" + model.password;
    return this.http.get<any>(environment.apiUrl + "Users/authenticate" + apiUrl, model);
  }

}
