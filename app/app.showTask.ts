/**
 * Created by knoldus on 17/2/17.
 */
import {Component, OnInit} from "@angular/core";
import {TaskComponent} from "./todo";
@Component({
  selector : 'show',
  templateUrl : "./app/showTask.html",
  styleUrls : [''],
})
export class ShowTaskComponent implements OnInit{
  tasks:TaskComponent[];
  ngOnInit(): void {

  }



}
