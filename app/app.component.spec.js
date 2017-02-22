/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
"use strict";
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var MockRouter = (function () {
        function MockRouter() {
        }
        return MockRouter;
    }());
    beforeEach(testing_1.async(function () {
        console.log('--------------------------------------------------------------------------------------');
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            providers: [{ provide: router_1.Router, useClass: MockRouter }, router_1.RouterOutletMap],
            imports: [router_1.RouterModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map