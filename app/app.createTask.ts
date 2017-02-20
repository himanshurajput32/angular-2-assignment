/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {Task} from "./todo";
import {AppService} from "./app.service";
@Component({
  selector : 'create',
  templateUrl : "./app/createTask.html",
  styleUrls : ['']
})
export class CreateTask implements OnInit{
  task=new Task();
  constructor(private service:AppService) {
  }
  ngOnInit(){

  }

  submit() {
    this.service.create(this.task)
  }



}
