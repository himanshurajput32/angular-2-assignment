/**
 * Created by knoldus on 1/3/17.
 */
import {ShowTask} from "./app.showTask";
import {RouterOutletMap, Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {async, TestBed, ComponentFixture} from "@angular/core/testing";
import {By}           from '@angular/platform-browser';
import {DebugElement} from "@angular/core";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('ShowTask', function () {
  let de: DebugElement;
  let comp: ShowTask;
  let fixture: ComponentFixture<ShowTask>;
  let service: AppService;
  let router: Router;

  class MockRouter {
    navigate():Promise<boolean>{
      return Promise.resolve(true)
    }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTask],
      providers: [{provide: Router, useClass: MockRouter}, RouterOutletMap, AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTask);
    comp = fixture.componentInstance;
    comp.tasks = [{
      date: '01/03/2017',
      title: 'Angular Testing',
      description: 'sdbbdc dccdjckw  ckjwq ck c kcw qkc',
      priority: 'high'
    }]
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppService);
    router = fixture.debugElement.injector.get(Router);
  });

  it('should create component', () => expect(comp).toBeDefined());


  it('it should be able to get data from service', () => {
    spyOn(service, 'getData').and.returnValue(
      Observable.of<any>(
        [{
          date: '01/03/2017',
          title: 'Nothing',
          description: 'dcd  eijqiw i wqifjij f fjweiq ',
          priority: 'high',
        }]
      )
    );
    comp.ngOnInit();
    expect(comp.tasks).toEqual([{
      date: '2/03/2017',
      title: 'Angular',
      description: 'sxdjcid ffh cq fhqu xf  uqx',
      priority: 'high'
    }])
  });

  it('it should be able to delete data from service',() =>{
    spyOn(window, "alert");
    spyOn(service,'removeTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.taskCompleted("0");
    expect(window.alert).toHaveBeenCalledWith('Task is successfully removed');
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });

  it('it should be able to edit data from service',() =>{
    spyOn(service,'updateTask').and.returnValue(
      Observable.of<any>(
        [{
          date: '',
          title: '',
          description: '',
          priority: '',
        }]
      )
    );
    comp.editTask("0");
    router.navigate([]).then(data => {
      expect(data).toBe(true);
    })

  });


});
