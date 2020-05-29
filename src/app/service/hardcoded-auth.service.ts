import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }


  authenticate(username, password) {
    if (username === 'nvrit' && password === 'simtek') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
   }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    if (user != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }

}
