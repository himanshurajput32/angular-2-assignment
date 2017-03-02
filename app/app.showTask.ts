/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {Task} from "./todo";
import {AppService} from "./app.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: "./showTask.html",
  styleUrls: [''],
})
export class ShowTask implements OnInit {
  tasks: Task[];

  constructor(private service: AppService, private router: Router) {
  }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.tasks = data
    }, error => {
      alert(error)
    })
  }

  taskCompleted(id: string) {
    this.service.removeTask(id).subscribe(data => {
      //this.router.navigate(['show']);
    }, err => {
      alert(err)
    })
    this.service.getData().subscribe(data => {
      this.tasks = data
    }, error => {
      alert(error)
    })
  }
  editTask(id:string){
   this.router.navigate(['edit',id]);
  }

}
