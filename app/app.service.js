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
require('rxjs/add/operator/map');
var http_1 = require("@angular/http");
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/of');
require('rxjs/add/observable/throw');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.addTask = function (task) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        5;
        return this.http.post('http://localhost:9000/add', task, { headers: jsonHeader })
            .map(function (data) {
            return _this.extractData(data);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    AppService.prototype.handleError = function (error) {
        var errMsg;
        try {
            if (JSON.parse(error._body).message) {
                errMsg = JSON.parse(error._body).message;
            }
            else {
                errMsg = 'Something went wrong. Please try again later.';
            }
        }
        catch (e) {
            errMsg = 'Something went wrong. Please try again later.';
        }
        return Observable_1.Observable.throw(new Error(errMsg));
    };
    AppService.prototype.getData = function () {
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/get/all', { headers: jsonHeader })
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppService.prototype.removeTask = function (id) {
        var _this = this;
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:9000/remove/' + id, { headers: jsonHeader })
            .map(function (data) {
            return _this.extractData(data);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService.prototype.updateTask = function (task, id) {
        var _this = this;
        var obj = {
            _id: id,
            title: task.title,
            description: task.description,
            priority: task.priority,
            date: task.date
        };
        var jsonHeader = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:9000/update', obj, { headers: jsonHeader })
            .map(function (data) {
            return _this.extractData(data);
        })
            .catch(function (e) {
            return _this.handleError(e);
        });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map