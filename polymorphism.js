var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Polymorphism in Typescript - Method Overriding
var Parent1 = /** @class */ (function () {
    function Parent1(fname, mname) {
        this.fathername = fname;
        this.mothername = mname;
    }
    Parent1.prototype.details = function () {
        console.log('Parents Details' + '\n' + this.fathername + '\n' + this.mothername);
    };
    return Parent1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1(dad, mom, kid) {
        var _this = _super.call(this, dad, mom) || this;
        _this.childname = kid;
        return _this;
    }
    Child1.prototype.details = function () {
        _super.prototype.details.call(this);
        console.log("Kid's name: ".concat(this.childname, "."));
    };
    return Child1;
}(Parent1));
var c1 = new Child1('John', 'Rita', 'Tom');
c1.details();
