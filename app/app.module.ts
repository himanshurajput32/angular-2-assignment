import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTaskComponent} from "./app.createTask";
import {ShowTaskComponent} from "./app.showTask";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule],
  declarations: [AppComponent, CreateTaskComponent, ShowTaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
