import { Component } from '@angular/core';
import { User } from './user';
import {RegistrationService} from './registration.service';
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

  constructor(private regs:RegistrationService) {}

  validateBranch(value) {
    if (value === 'default') {
      this.branchHasError = true;
    } else {
      this.branchHasError = false;
    }
  }
onSubmit()
{
  this.submitted=true;
  console.log(this.userModel);
  this.regs.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => this.errorMsg = error.statusText
      )
}
  
}


