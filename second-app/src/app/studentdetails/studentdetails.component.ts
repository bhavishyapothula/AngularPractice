import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  students=[];
  errormsg;

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this._studentService.getDetails()
   .subscribe(data=>this.students=data,
    error=>this.errormsg=error);
    
  }
}
