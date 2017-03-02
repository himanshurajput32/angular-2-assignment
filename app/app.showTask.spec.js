"use strict";
/**
 * Created by knoldus on 1/3/17.
 */
var app_showTask_1 = require("./app.showTask");
var router_1 = require("@angular/router");
var testing_1 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require('@angular/platform-browser');
var app_service_1 = require("./app.service");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
describe('ShowTask', function () {
    var de;
    var comp;
    var fixture;
    var service;
    var router;
    var MockRouter = (function () {
        function MockRouter() {
        }
        MockRouter.prototype.navigate = function () {
            return Promise.resolve(true);
        };
        return MockRouter;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [app_showTask_1.ShowTask],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap, app_service_1.AppService],
            imports: [testing_1.RouterTestingModule, common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(app_showTask_1.ShowTask);
        comp = fixture.componentInstance;
        comp.tasks = [{
                date: '01/03/2017',
                title: 'Angular Testing',
                description: 'sdbbdc dccdjckw  ckjwq ck c kcw qkc',
                priority: 'high'
            }];
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        service = fixture.debugElement.injector.get(app_service_1.AppService);
        router = fixture.debugElement.injector.get(router_1.Router);
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('it should be able to get data from service', function () {
        spyOn(service, 'getData').and.returnValue(Observable_1.Observable.of([{
                date: '01/03/2017',
                title: 'Nothing',
                description: 'dcd  eijqiw i wqifjij f fjweiq ',
                priority: 'high',
            }]));
        comp.ngOnInit();
        expect(comp.tasks).toEqual([{
                date: '2/03/2017',
                title: 'Angular',
                description: 'sxdjcid ffh cq fhqu xf  uqx',
                priority: 'high'
            }]);
    });
    it('it should be able to delete data from service', function () {
        spyOn(window, "alert");
        spyOn(service, 'removeTask').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: ''
            }]));
        comp.taskCompleted("0");
        expect(window.alert).toHaveBeenCalledWith('Task is successfully removed');
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
    it('it should be able to edit data from service', function () {
        spyOn(service, 'updateTask').and.returnValue(Observable_1.Observable.of([{
                date: '',
                title: '',
                description: '',
                priority: '',
            }]));
        comp.editTask("0");
        router.navigate([]).then(function (data) {
            expect(data).toBe(true);
        });
    });
});
//# sourceMappingURL=app.showTask.spec.js.map