import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDatepickerInputEvent } from "@angular/material";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, public snackBar: MatSnackBar) { }

  public registerData: RegisterData = new RegisterData();
  private _currentTime: Date;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date();
  dateFormControl = new FormControl(new Date(), [
    Validators.required
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  surnameFormControl = new FormControl('', [
    Validators.required
  ]);

  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }

  send() { }

  isValidForm() {
    return !(this.emailFormControl.hasError('required')
      || this.passwordFormControl.hasError('required')
      || this.nameFormControl.hasError('required')
      || this.surnameFormControl.hasError('required')
      || this.emailFormControl.hasError('email')
      || this.passwordFormControl.hasError('minLength')
      || this.dateFormControl.hasError('required'));
  };

  matcher = new MyErrorStateMatcher();
  chooseBirhday(event: MatDatepickerInputEvent<Date>) {
    this.registerData.birthday = event.value;
  }
  ngOnInit() {
    this._currentTime = new Date();
    this.registerData.birthday = this._currentTime;
    this.registerData.token = this._currentTime.getHours().toString()+this._currentTime.getMinutes().toString()+this._currentTime.getSeconds().toString();
  }

}

export class RegisterData {

  constructor(public email?: string,
    public pwd?: string,
    public name?: string,
    public surname?: string,
    public birthday?: Date,
    public token?: string
  ) { }

}

