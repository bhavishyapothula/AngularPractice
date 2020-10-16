import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  streams=['CSE','ECE','MECH','CIVIL','EEE'];
  userModel=new User('','abc@gmail.com',987,'default','fourth',true);
  branchHasError = true;
  submitted = false;
  errorMsg = '';

  constructor() {}

  validateBranch(value) {
    if (value === 'default') {
      this.branchHasError = true;
    } else {
      this.branchHasError = false;
    }
  }
onSubmit()
{
  console.log(this.userModel);
}
  
}


