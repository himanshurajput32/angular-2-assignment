"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var app_createTask_1 = require("./app.createTask");
var app_showTask_1 = require("./app.showTask");
var app_showTaskForm_1 = require("./app.showTaskForm");
var app_service_1 = require("./app.service");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(app_routes_1.routes), forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, app_createTask_1.CreateTask, app_showTask_1.ShowTask, app_showTaskForm_1.ShowTaskForm],
            bootstrap: [app_component_1.AppComponent],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map