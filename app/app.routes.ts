/**
 * Created by knoldus on 17/2/17.
 */
import {Routes} from '@angular/router'
import {ShowTask} from "./app.showTask";
import {CreateTask} from "./app.createTask";
import {AppComponent} from "./app.component";
import {ShowTaskForm} from "./app.showTaskForm";
export const routes:Routes=[{
  path:'create',
  component: CreateTask
},
  {
    path: 'show',
    component: ShowTask
  },
  {
    path:'editForm',
    component:ShowTaskForm
  }
  ];
