
/**
 * Created by knoldus on 17/2/17.
 */
import {Injectable} from "@angular/core";
import {Task} from "./todo";

@Injectable()
export class AppService{
static taskArray:Task[]=[];
tasks:Task[]=[];
  createTask(task:Task){
   AppService.taskArray.push(task);
  }

  doneTask(task:Task){
  this.tasks.pop();
  }
  showTasks(){
    return AppService.taskArray;
  }
}
