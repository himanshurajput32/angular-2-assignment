import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {TaskComponent} from "./todo";

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  providers:[AppService],
})
export class AppComponent implements OnInit {
task:TaskComponent=new TaskComponent();
  constructor(private service:AppService){

}
  ngOnInit(): void {
  }

}

