/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {TaskComponent} from "./todo";
import {AppService} from "./app.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'show',
  templateUrl: "./app/showTask.html",
  styleUrls: [''],
})
export class ShowTaskComponent implements OnInit {
  tasks: TaskComponent[];

  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) {
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


}
