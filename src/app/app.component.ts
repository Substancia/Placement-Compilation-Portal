import { Component, EventEmitter } from '@angular/core';
import { IndexComponent } from './components/index/index.component';

@Component({
  selector: 'my-app',
  template: `<header></header>
  <div>
  <index></index>
  </div>
  `,
})
export class AppComponent  { 
  constructor(){
  }
}
