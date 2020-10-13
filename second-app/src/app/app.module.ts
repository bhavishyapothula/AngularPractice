import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {StudentService} from './student.service';
import { HighlightDirective } from './highlight.directive';
import {UnlessDirective} from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentdetailsComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
