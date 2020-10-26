import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
isAuth:boolean=false;
  constructor() { }
  checkAuth(uname,pass)
  {
    if(uname==='test' && pass==='123')
    {
      this.isAuth=true;
    }
  }

}
