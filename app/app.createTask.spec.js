"use strict";
/**
 * Created by knoldus on 1/3/17.
*/
var app_createTask_1 = require('./app.createTask');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/router/testing");
var http_1 = require("@angular/http");
var app_service_1 = require("./app.service");
describe('CreateTask', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_createTask_1.CreateTask],
            providers: [router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_2.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_createTask_1.CreateTask);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.createTask.spec.js.map