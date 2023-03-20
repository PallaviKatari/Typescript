"use strict";
exports.__esModule = true;
exports.Developer = void 0;
var Developer = /** @class */ (function () {
    function Developer(name, position) {
        this.name = name;
        this.position = position;
        // this.ename = ename;
        // this.eposition = eposition;
        // const dep = this.condition;
        // const dep1 = this.condition1;
        // dep.develop();
        // dep1.develop();
    }
    Developer.prototype.develop = function () { console.log("".concat(this.name)); };
    return Developer;
}());
exports.Developer = Developer;
var obj = new Developer('a', 'b');
obj.develop();
var obj1 = new Developer('c', 'd');
obj1.develop();
