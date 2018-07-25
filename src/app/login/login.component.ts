import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public authService: AuthService){}
  public loginData: LoginData = new LoginData();
  login(){
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
  }

  ngOnInit() {
  }

}
export class LoginData {
  constructor(public email?: string,
              public pwd?: string
  ) { }
}