"use strict";
var app_showTask_1 = require("./app.showTask");
var app_createTask_1 = require("./app.createTask");
var app_editTask_1 = require("./app.editTask");
exports.routes = [{
        path: 'create',
        component: app_createTask_1.CreateTask,
    },
    {
        path: 'show',
        component: app_showTask_1.ShowTask,
    }, {
        path: 'edit',
        component: app_editTask_1.EditTask,
    }, {
        path: 'edit/:id',
        component: app_editTask_1.EditTask,
    }];
//# sourceMappingURL=app.routes.js.map