import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'comp-interaction';
  userName='ab';
  private _mail;
  userLogged;
  @ViewChild('myref') eleRef:ElementRef;
  @ViewChild(ChildComponent) childRef:ChildComponent;
  ngAfterViewInit()
  {
    this.childRef.message='Parent Changed msg'
    this.eleRef.nativeElement.focus();
  }
  get mail()
  {
    return this._mail;
  }
  set mail(value)
  {
    this._mail=value;
    if(value==='bhavishya')
    {
    alert("Welcome Back Bhavishya");
    }

  }
  wish(updated)
  {
    this.userName=updated;
    if(updated==='bhavishya')
    {
    alert("Welcome Back Bhavishya");
    }
  }
}
