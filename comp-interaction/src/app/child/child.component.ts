import { Component, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  constructor() { }
  @Input() loggedIn=false;
  //@Output greetEmitter=new EventEmitter();
  msg='';
  message='';
  userName='childOne';
  wish()
  {
    alert(this.userName);
  }
  // private _loggedIn;
  // get loggedIn(){
  //   return this._loggedIn;
  //  }
  //  @Input() set loggedIn(value)
  //  {
  //   this._loggedIn=value;
   
  //    if(value===true)
  //    this.msg='Welcome';
  //    else
  //    this.msg='Please Login'

  //  }
ngOnChanges(change:SimpleChange)
 {
 
  const value=change['loggedIn'].currentValue;
  if(value===true)
  this.msg='Welcome';
 else
   this.msg='Please Login'
 
 }


}
