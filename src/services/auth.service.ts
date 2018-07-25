
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { MatSnackBar } from '@angular/material';
import { StorageService } from "./storage.service";
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
 
  constructor(public http: HttpClient, public snackBar: MatSnackBar, public StorageService:StorageService) { }
  

  registerUser(registerData) {
    if(!this.StorageService.containsUser(registerData)){
      this.StorageService.users.push(registerData);
      this.saveToken(registerData.token);
      this.saveId(this.StorageService.users.indexOf(registerData));
      localStorage.setItem("users", JSON.stringify(this.StorageService.users));
      this.StorageService.users =  JSON.parse(localStorage.getItem("users"));
    }else{
      alert('email is already used')
    }
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
    let user = this.StorageService.getUser(loginData);
    if(this.StorageService.containsUser(loginData)){
      this.saveToken(user.token);
      this.saveId(this.StorageService.users.indexOf(user));
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