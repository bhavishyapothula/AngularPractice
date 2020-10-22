import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { MymoduleModule } from '../mymodule/mymodule.module';



@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule,
    MymoduleModule
  ],
  exports:[ViewComponentComponent]
})
export class ViewModule { }
