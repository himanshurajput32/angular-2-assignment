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
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var router_1 = require("@angular/router");
var todo_1 = require("./todo");
var EditTask = (function () {
    function EditTask(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.task = new todo_1.Task();
    }
    EditTask.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            var x = JSON.stringify(data);
            _this.service.getData().subscribe(function (data1) {
                for (var _i = 0, data1_1 = data1; _i < data1_1.length; _i++) {
                    var i = data1_1[_i];
                    if (i._id == data.id) {
                        _this.task.title = i.title;
                        _this.task.description = i.description;
                        _this.task.priority = i.priority;
                        _this.task.date = i.date;
                        EditTask.id1 = data.id;
                    }
                }
            });
        });
    };
    EditTask.prototype.createTask = function () {
        var _this = this;
        this.service.updateTask(this.task, EditTask.id1).subscribe(function (data) {
            _this.router.navigate(['show']);
        });
    };
    EditTask = __decorate([
        core_1.Component({
            selector: 'create',
            templateUrl: "./app/createTask.html",
            styleUrls: ['']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
    ], EditTask);
    return EditTask;
}());
exports.EditTask = EditTask;
//# sourceMappingURL=app.editTask.js.map