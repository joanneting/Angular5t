import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from'@angular/forms';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';

import {NgPipesModule} from 'ngx-pipes';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Homework1Component } from './homework1/homework1.component';  //別人的moudule


@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Pratice1Component,
    Lesson4Component,
    Homework1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule //別人寫的
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
