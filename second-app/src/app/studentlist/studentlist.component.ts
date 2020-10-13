import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students=[];
errormsg;
auth=false;
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
   this._studentService.getDetails()
   .subscribe(data=>this.students=data,
    error=>this.errormsg=error);
  }

}
