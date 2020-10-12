import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() parentData;
@Output() public childEvent=new EventEmitter();
  auth=true;
  myc="blue";
  power = 5;
  factor = 2;
  birthday = new Date(1999, 6, 27); 
  toggle = true; 

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  
 // values = '';

  // onKey(event: any) { 
  //   this.values += event.target.value + ' | ';
  // }
  // onKey(event: KeyboardEvent) { 
  //   console.log(event);
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }
  // valuesref= '';
  // onKeyref(value: string) {
  //   this.valuesref += value + ' | ';
  // }

  listitems=''
  addItem(x)
  {
    this.listitems+=x+'|';
  }
  fireEvent()
  {
    this.childEvent.emit('I am from child component');
  }
  
}
