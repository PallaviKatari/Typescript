"use strict";
exports.__esModule = true;
exports.Developer = void 0;
var Developer = /** @class */ (function () {
    function Developer(name, position, ename, eposition) {
        this.name = name;
        this.position = position;
        this.ename = ename;
        this.eposition = eposition;
    }
    Developer.prototype.develop = function () {
        console.log("".concat(this.name, " - Develop an app in ").concat(this.position));
    };
    Developer.prototype.edevelop = function () {
        console.log("".concat(this.ename, " - Develop an app in ").concat(this.eposition));
    };
    return Developer;
}());
exports.Developer = Developer;
var dev = new Developer("John", "Angular", "Peter", "React");
dev.develop();
dev.edevelop();
