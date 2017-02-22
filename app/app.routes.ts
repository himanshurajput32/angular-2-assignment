/**
 * Created by knoldus on 17/2/17.
 */
import {Routes} from '@angular/router'
import {ShowTaskComponent} from "./app.showTask";
import {CreateTaskComponent} from "./app.createTask";
export const routes:Routes=[{
  path:'create',
  component: CreateTaskComponent,
},
  {
    path: 'show',
    component: ShowTaskComponent,
  }];
