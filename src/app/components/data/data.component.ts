import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'data',
  templateUrl: 'data.component.html',
})
export class DataComponent  { 
  name = 'Angular'
@Input('parentData') company: Data;
@Input('parentData2') n: number;
    // data: Data = company;
    constructor(){
    // this.data = DataComponent.company;
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
