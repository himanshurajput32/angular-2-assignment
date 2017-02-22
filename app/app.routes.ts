/**
 * Created by knoldus on 17/2/17.
 */
import {Routes} from '@angular/router'
import {ShowTask} from "./app.showTask";
import {CreateTask} from "./app.createTask";
import {EditTask} from "./app.editTask";
export const routes:Routes=[{
  path:'create',
  component: CreateTask,
},
  {
    path: 'show',
    component: ShowTask,
  },{
  path:'edit',
    component:EditTask,
  },{
  path:'edit/:id',
    component:EditTask,
  }];
