import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTask} from "./app.createTask";
import {ShowTask} from "./app.showTask";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {EditTask} from "./app.editTask";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule],
  declarations: [AppComponent, CreateTask, ShowTask,EditTask],
  bootstrap: [AppComponent]
})
export class AppModule {
}
