import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService, public StorageService:StorageService) { }
  ngOnInit(){
    if(localStorage.getItem("users") != null){this.StorageService.users = JSON.parse(localStorage.getItem("users"));}
  }
}
