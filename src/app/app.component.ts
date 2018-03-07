import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='LuxProtoss';
  url='http://www.google.com';

  zzz(){
    console.log("123456");
  }
}
