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
        List: []
      }
    console.log("col_i:" + col_i);
    if (/\S/.test(newItemH))
      this.company.Cols[col_i].Items.push(item);
  }

  delItem(col_i: number, list_k: number) {
    if (confirm("Are you sure you want to delete the List: " + this.company.Cols[col_i].Items[list_k].Header))
      this.company.Cols[col_i].Items.splice(list_k, 1);
  }

  newPoint(col_i: number, list_k: number, newPointH: string) {
    console.log("col_i:" + col_i);
    console.log("list_k:" + list_k);
    if (/\S/.test(newPointH))
      this.company.Cols[col_i].Items[list_k].List.push(newPointH);
  }

  delPoint(col_i: number, list_k: number, point_p: number) {
    if (confirm("Are you sure you want to delete the point: " + this.company.Cols[col_i].Items[list_k].List[point_p]))
      this.company.Cols[col_i].Items[list_k].List.splice(point_p, 1);
  }

  editName() {
    var newName: string = prompt("Change name from " + this.company.Col0.Name + " to:", this.company.Col0.Name);
    if (/\S/.test(newName))
      this.company.Col0.Name = (newName?newName:this.company.Col0.Name);
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
