/**
 * Created by knoldus on 17/2/17.
 */
import {Injectable} from "@angular/core";
import {Task} from "./todo";
import 'rxjs/add/operator/map';
import {Http, Headers} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
@Injectable()
export class AppService {

  constructor(private http: Http) {
  }

  addTask(task: Task): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });
    5
    return this.http.post('http://localhost:9000/add', task,
      {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch(e => {
        return this.handleError(e)
      });
  }

  extractData(res: any) {
    let body = res.json();
    return body;
  }

  private handleError(error: any) {
    let errMsg: string;
    try {
      if (JSON.parse(error._body).message) {
        errMsg = JSON.parse(error._body).message;
      } else {
        errMsg = 'Something went wrong. Please try again later.';
      }
    } catch (e) {
      errMsg = 'Something went wrong. Please try again later.';
    }
    return Observable.throw(new Error(errMsg));
  }


  getData(): Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader})
      .map(this.extractData)
      .catch(this.handleError);
  }

  removeTask(id: string) {
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.get('http://localhost:9000/remove/' + id,
      {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch(e => {
        return this.handleError(e)
      });
  }

  updateTask(task: Task, id: string) {
    let obj = {
      _id: id,
      title: task.title,
      description: task.description,
      priority: task.priority,
      date: task.date
    }
    let jsonHeader = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:9000/update', obj,
      {headers: jsonHeader})
      .map(data => {
        return this.extractData(data)
      })
      .catch(e => {
        return this.handleError(e)
      });
  }
}
