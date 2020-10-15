import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
  departments=[
    {"id":1,"name":'Angualar'},
    {"id":2,"name":'React'},
    {"id":3,"name":'Node'}
  ];
  selectedId;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{this.selectedId=parseInt(params.get('id'))});
  }
onSelect(department)
{
  //this.router.navigate(['departments',department.id]);
  this.router.navigate([department.id],{relativeTo:this.route});
}
isSelected(department)
{
  return department.id===this.selectedId;
}
}
