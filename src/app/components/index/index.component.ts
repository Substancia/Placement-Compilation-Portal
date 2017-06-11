import { Component, Input, EventEmitter } from '@angular/core';
import { DataComponent } from '../data/data.component';
import { DataService } from '../../services/data.service';
// import { Interface } from '../interface';

@Component({
  moduleId: module.id,
  selector: 'index',
  // directives: [DataComponent],
  template: `<h2>Hello {{name}}</h2>
  <div [ngClass]="{table_main: false}" class="table-bordered">
    <data *ngFor = "let company of data, let n = index" [company]="company" [n]="n" class="panel-group"></data>
  </div>
  
  `,
  providers: [DataService]
})
export class IndexComponent {

  name: string;
  data: Data[];


  constructor(private dataService: DataService) {
    this.name = 'Aakarsh',
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.data=data;
    })
  }
}
interface Data {
  Col0: Col0,
  Cols: Col[]
}
interface Col0 {
  Name: string,
  Tags: string
}
interface Col {
ColHeader: string,
Items: Item[],
}
interface Item {
  Header: string,
  List: string[]
}
