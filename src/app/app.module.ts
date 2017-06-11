import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { IndexComponent }  from './components/index/index.component';
import { HeaderComponent }  from './components/header/header.component';
import { DataComponent }  from './components/data/data.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, IndexComponent, HeaderComponent, DataComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
