import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService) { }
  ngOnInit(){
    this.authService.users = JSON.parse(localStorage.getItem("users"));
    console.log(this.authService.users);
  }
}
