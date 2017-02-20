import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTask} from "./app.createTask";
import {ShowTask} from "./app.showTask";
import {ShowTaskForm} from "./app.showTaskForm";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(routes),FormsModule],
  declarations: [ AppComponent,CreateTask,ShowTask,ShowTaskForm ],
  bootstrap:    [ AppComponent ],
  providers:[AppService]
})
export class AppModule { }
