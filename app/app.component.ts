import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Task} from "./todo";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'./app.component.html',
  providers:[AppService],
})
export class AppComponent implements OnInit {
task:Task=new Task();
  constructor(private service:AppService){

}
  ngOnInit(): void {
  }

}

