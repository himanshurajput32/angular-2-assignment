import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTaskComponent} from "./app.createTask";
import {ShowTaskComponent} from "./app.showTask";
import {ShowTaskFormComponent} from "./app.showTaskForm";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(routes),FormsModule],
  declarations: [ AppComponent,CreateTaskComponent,ShowTaskComponent,ShowTaskFormComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AppService]
})
export class AppModule { }
