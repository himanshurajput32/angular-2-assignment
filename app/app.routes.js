"use strict";
var app_showTask_1 = require("./app.showTask");
var app_createTask_1 = require("./app.createTask");
exports.routes = [{
        path: 'create',
        component: app_createTask_1.CreateTaskComponent,
    },
    {
        path: 'show',
        component: app_showTask_1.ShowTaskComponent,
    }];
//# sourceMappingURL=app.routes.js.map