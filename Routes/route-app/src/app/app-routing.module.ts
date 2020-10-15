import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentlistComponent} from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments',component:DepartmentlistComponent},
  {
    path:'departments/:id',
    component:DepartmentDetailComponent,
    children:[
      {path:'overview',component:DepartmentOverviewComponent},
      {path:'contact',component:DepartmentContactComponent}
    ]
  },
  {path:'employees',component:EmployeelistComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
