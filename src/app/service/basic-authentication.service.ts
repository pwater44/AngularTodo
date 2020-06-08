import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'simtek'
    let basicAuthHeaderString = 'Basic ' + window.btoa (
    username + ':' + password)
    return basicAuthHeaderString
  }

  executeAuthenticationService(username, password) {
  let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
  let headers = new HttpHeaders({
    Authorization: basicAuthHeaderString
  })
  return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
  }
}
  


export class AuthenticationBean {
  constructor(public message: string) { }
}




