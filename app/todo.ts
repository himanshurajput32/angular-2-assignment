/**
 * Created by knoldus on 17/2/17.
 */
export class Task{
  id:number;
  description:string;
  title:string;
  date:Date;
  priority:string;
  constructor(){
    this.id=null;
    this.title='';
    this.description='';
    this.date=null;
    this.priority='';

  }
}
