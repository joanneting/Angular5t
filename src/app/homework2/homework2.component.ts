import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.css']
})
export class Homework2Component implements OnInit {
number1=0;
number2=0;
add=0;
// @Output() add:EventEmitter<any>=new EventEmitter<any>();
  catch1(event:any){
  
    this.number1=event;
    console.log(this.number1)
  }
  catch2(event:any){
    console.log(event);
    this.number2=event;
    this.add= Number(this.number1)+Number(this.number2);
  }

  
  
  constructor() { }

  ngOnInit() {
    
  }

}
