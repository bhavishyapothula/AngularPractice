import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('validationForm') validationForm;
username;
password;
errorMsg="Ivalid Credentials!!!Try Again";
displayError=false;
  constructor(private _authService:AuthenticationService,private _router:Router) { }

  ngOnInit(): void {

  }
  onSubmit()
  {
    console.log(this.username+" "+this.password);
    //console.log(this._authService.isAuth);
    this._authService.checkAuth(this.username,this.password);
    this.validationForm.reset();
    this.displayError=!this._authService.isAuth;
    this._router.navigate(['details']);
    
  }

}
