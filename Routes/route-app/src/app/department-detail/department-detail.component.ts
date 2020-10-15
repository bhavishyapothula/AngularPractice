import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //this.departmentId=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params:ParamMap)=>{this.departmentId=parseInt(params.get('id'))});

  }
  goPrev()
  {
    let prevId=this.departmentId-1;
    //this.router.navigate(['departments',prevId]);
    this.router.navigate(['../',prevId],{relativeTo:this.route});
  }
  goNext()
  {
    let nextId=this.departmentId+1;
    //this.router.navigate(['departments',nextId]);
    this.router.navigate(['../',nextId],{relativeTo:this.route});
  }
  goBack()
  {
    //this.router.navigate(['departments',{id:this.departmentId}]);
    this.router.navigate(['../',{id:this.departmentId}],{relativeTo:this.route});
  }
  showOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showContact()
  {
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
