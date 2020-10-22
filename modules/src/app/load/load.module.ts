import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazycompComponent } from './lazycomp/lazycomp.component';
import { LoadRoutingModule } from './load-routing.module';

@NgModule({
  declarations: [LazycompComponent],
  imports: [
    CommonModule,
    LoadRoutingModule
  ],
  exports:[
    LazycompComponent
  ]
})
export class LoadModule { }
