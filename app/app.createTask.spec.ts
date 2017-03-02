/**
 * Created by knoldus on 1/3/17.
*/
import {CreateTask} from './app.createTask';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { RouterOutletMap} from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {AppService} from "./app.service";

describe('CreateTask', function () {
  let de: DebugElement;
  let comp: CreateTask;
  let fixture: ComponentFixture<CreateTask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTask],
      providers: [RouterOutletMap,AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule, HttpModule]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTask);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});

