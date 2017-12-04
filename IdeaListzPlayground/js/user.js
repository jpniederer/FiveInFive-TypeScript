"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(name) {
        this.name = name;
        this.hiddenId = Math.random() * 1000000;
    }
    User.prototype.displayName = function () {
        console.log(this.name);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map