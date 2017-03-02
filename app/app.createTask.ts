/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {Task} from "./todo";
import {AppService} from "./app.service";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector : 'create',
  templateUrl : "./createTask.html",
  styleUrls : ['']
})
export class CreateTask implements OnInit{

  task:Task=new Task();
  constructor(private service:AppService,private router:Router) {
  }

  ngOnInit(){


  }
createTask(){
    this.service.addTask(this.task).subscribe(data => {
      this.router.navigate(['show']);
    }, err => {
      alert(err)
    })

}




}
