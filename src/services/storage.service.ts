import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  users = [];
  constructor() { }
  containsUser(loginData){
    console.log(loginData);
    if(this.users === null){
      return false;
    } else{
      let user = this.getUser(loginData);
      return this.users.indexOf(user) >-1 && this.users[this.users.indexOf(user)].email === loginData.email;
    }
    
  }
  getUser(loginData){
    return this.users.find(user => user.email === loginData.email)
  }
}

