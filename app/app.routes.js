"use strict";
var app_showTask_1 = require("./app.showTask");
var app_createTask_1 = require("./app.createTask");
var app_showTaskForm_1 = require("./app.showTaskForm");
exports.routes = [{
        path: 'create',
        component: app_createTask_1.CreateTaskComponent,
    },
    {
        path: 'show',
        component: app_showTask_1.ShowTaskComponent,
    },
    {
        path: 'editForm',
        component: app_showTaskForm_1.ShowTaskFormComponent,
    }
];
//# sourceMappingURL=app.routes.js.map