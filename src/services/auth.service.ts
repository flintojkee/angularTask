
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
  users = [];
  constructor(public http: HttpClient, public snackBar: MatSnackBar) { }


  registerUser(registerData) {
    this.users.push(registerData)
    this.saveToken(registerData.token);
    this.saveId(this.users.indexOf(registerData));
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get userId() {
    return localStorage.getItem('userId');
  }

  get isAuthenticated() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('userId');
  }

  loginUser(loginData) {
    let user = this.users.find(user => user.pwd === loginData.pwd)

    if(this.users.indexOf(user) >-1 && this.users[this.users.indexOf(user)].emal === loginData.pwd){
      this.saveToken(user.token);
      this.saveId(user.userId);
    }else{
      alert("Wrong password or email");
    }
    

  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  saveId(userId) {
    localStorage.setItem('userId', userId);
  }
}