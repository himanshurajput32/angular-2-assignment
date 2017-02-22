import {OnInit, Component} from "@angular/core";
import {AppService} from "./app.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Task} from "./todo";
@Component({
  selector: 'create',
  templateUrl: "./app/createTask.html",
  styleUrls: ['']
})
export class EditTask implements OnInit {
static id1:string;
  task:Task = new Task();
  constructor(private service: AppService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe((data:any)=>{
      let x=JSON.stringify(data)
      this.service.getData().subscribe(data1=>{
        for(let i of data1){

          if(i._id==data.id){
            this.task.title=i.title
            this.task.description=i.description
            this.task.priority=i.priority
            this.task.date=i.date
            EditTask.id1=data.id
          }
        }})

    })

}

  createTask(){
    this.service.updateTask(this.task,EditTask.id1).subscribe(data=>{
      this.router.navigate(['show']);
    })
  }
}
