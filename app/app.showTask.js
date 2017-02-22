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
/**
 * Created by knoldus on 17/2/17.
 */
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var router_1 = require("@angular/router");
var ShowTask = (function () {
    function ShowTask(service, router) {
        this.service = service;
        this.router = router;
    }
    ShowTask.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            alert(error);
        });
    };
    ShowTask.prototype.taskCompleted = function (id) {
        var _this = this;
        this.service.removeTask(id).subscribe(function (data) {
            //this.router.navigate(['show']);
        }, function (err) {
            alert(err);
        });
        this.service.getData().subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            alert(error);
        });
    };
    ShowTask.prototype.editTask = function (id) {
        this.router.navigate(['edit', id]);
    };
    ShowTask = __decorate([
        core_1.Component({
            selector: 'show',
            templateUrl: "./app/showTask.html",
            styleUrls: [''],
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], ShowTask);
    return ShowTask;
}());
exports.ShowTask = ShowTask;
//# sourceMappingURL=app.showTask.js.map