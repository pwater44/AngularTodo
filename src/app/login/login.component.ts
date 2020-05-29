import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HardcodedAuthService} from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'nvrit'
password = 'simtek'
errorMessage = 'Invalid Credentials'
invalidLogin = false

  constructor(private router: Router, private hardcodedAuth: HardcodedAuthService) { 

  }

  ngOnInit() {
  }

  handleLogin() {
    
    if(this.hardcodedAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      console.log("I forgot")
      this.invalidLogin = true

    }

  }

}
