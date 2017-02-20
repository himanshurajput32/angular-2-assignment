"use strict";
var app_showTask_1 = require("./app.showTask");
var app_createTask_1 = require("./app.createTask");
var app_showTaskForm_1 = require("./app.showTaskForm");
exports.routes = [{
        path: 'create',
        component: app_createTask_1.CreateTask
    },
    {
        path: 'show',
        component: app_showTask_1.ShowTask
    },
    {
        path: 'editForm',
        component: app_showTaskForm_1.ShowTaskForm
    }
];
//# sourceMappingURL=app.routes.js.map