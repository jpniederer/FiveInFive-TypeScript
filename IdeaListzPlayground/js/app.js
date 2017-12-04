"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var user_1 = require("./user");
document.getElementById('addIdea').addEventListener('click', function () {
    console.log("Clicked the add button");
    var name = helpers_1.getInputValue('username');
    var user = new user_1.User(name);
    user.displayName();
});
//# sourceMappingURL=app.js.map