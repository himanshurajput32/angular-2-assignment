import {AppComponent} from './app.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By, BrowserModule}           from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {RouterOutletMap, Router} from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {RouterTestingModule} from "@angular/router/testing";
import {AppService} from "./app.service";
import {HttpModule} from "@angular/http";
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [RouterOutletMap,AppService],
      imports: [RouterTestingModule, CommonModule, FormsModule,HttpModule,BrowserModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined());

});
