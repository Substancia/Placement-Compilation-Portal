import { Component, Input } from '@angular/core';
import { IndexComponent } from '../index/index.component'

@Component({
  moduleId: module.id,
  selector: 'data',
  templateUrl: 'data.component.html',
})
export class DataComponent {
  @Input()
  company: Data;
  @Input()
  n: number;

  name = 'Angular'

  constructor() {
    console.log(this.company);
  }

  newItem(col_i: number, newItemH: string) {
    var item: Item = 
    {
      Header: newItemH,
      List: [""]
    }
    console.log("col_i:" + col_i);
    // console.log("list_k:" + list_k);
    (this.company.Cols[col_i].Items.push(item));
    // this.company.Cols[col_i].Items.push();
  }


  newPoint(col_i: number, list_k: number, newPointH: string) {
    console.log("col_i:" + col_i);
    console.log("list_k:" + list_k);
    (this.company.Cols[col_i].Items[list_k].List.push(newPointH));
    // this.company.Cols[col_i].Items.push();
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
