/**
 * Created by knoldus on 17/2/17.
 */
import {Injectable} from "@angular/core";
import {TaskComponent} from "./todo";
@Injectable()
export class AppService {
  static taskArray: TaskComponent[] = [];
  tasks: TaskComponent[] = [];

  createTask(task: TaskComponent) {
    AppService.taskArray.push(task);
  }

  doneTask(task: TaskComponent) {
    AppService.taskArray.pop();
  }

  showTasks() {
    //return AppService.taskArray;
    return AppService.taskArray;
  }
}
