import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeelistComponent } from './employeelist/employeelist.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    
    EmployeelistComponent,
    
    DepartmentlistComponent,
    
    PageNotFoundComponent,
    
    DepartmentDetailComponent,
    
    DepartmentOverviewComponent,
    
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
