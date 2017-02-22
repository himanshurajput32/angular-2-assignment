/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {TaskComponent} from "./todo";
import {AppService} from "./app.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector : 'create',
  templateUrl : "./app/createTask.html",
  styleUrls : ['']
})
export class CreateTaskComponent implements OnInit{

  task:TaskComponent=new TaskComponent();
  constructor(private service:AppService,private router:Router,private route:ActivatedRoute) {
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
