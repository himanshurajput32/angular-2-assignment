/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {TaskComponent} from "./todo";
import {AppService} from "./app.service";
@Component({
  selector : 'create',
  templateUrl : "./app/createTask.html",
  styleUrls : ['']
})
export class CreateTaskComponent implements OnInit{
  task:TaskComponent=new TaskComponent();
  constructor(private service:AppService) {
  }
  ngOnInit(){

  }

  submit() {
    this.service.createTask(this.task);
  }



}
