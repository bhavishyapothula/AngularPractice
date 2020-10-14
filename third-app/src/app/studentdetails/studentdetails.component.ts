import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
students=[];
stuname;

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this._studentService.getDetails().subscribe(data=>console.log(this.students=Object.values(data)))
  }
  addUser()
  {
    console.log(this.stuname);
    this._studentService.setDetails(this.stuname).subscribe(data=>{console.log(data);
      window.location.reload();});
  }
  reset()
  {
    this._studentService.reset().subscribe(data=>{console.log(data);
      window.location.reload();});
  }


}
