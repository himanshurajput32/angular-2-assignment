
/**
 * Created by knoldus on 17/2/17.
 */
import {Injectable} from "@angular/core";
import {Task} from "./todo";

@Injectable()
export class AppService{

tasks:Task[]=[];
  create(task:Task){
   this.tasks.push(task);
  }

  done(task:Task){
  this.tasks.pop();
  }
}
