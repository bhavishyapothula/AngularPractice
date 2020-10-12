import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {ManualComponent} from './manual/manual.component';
import { ExponentPipe } from './exponent.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ManualComponent,
    ExponentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
