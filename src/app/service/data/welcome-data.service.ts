import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(
      'http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.executeHelloWorldBeanService()
    let header = new HttpHeaders ({
      Authorization: basicAuthHeaderString})
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`, { headers: header});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'user'
    let password = 'simtek'
    let basicAuthHeaderString = 'Basic ' + window.btoa (
    username + password)
    return basicAuthHeaderString
  }



}
