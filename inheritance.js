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
//Inheritance in Typescript
var Parent = /** @class */ (function () {
    function Parent(fname, mname) {
        this.fathername = fname;
        this.mothername = mname;
    }
    Parent.prototype.details = function () {
        console.log('Parents Details' + '\n' + this.fathername + '\n' + this.mothername);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(dad, mom, kid) {
        var _this = _super.call(this, dad, mom) || this; //John,Rita
        _this.childname = kid; //Tom
        return _this;
    }
    Child.prototype.details = function () {
        _super.prototype.details.call(this);
        console.log("Kid's name: ".concat(this.childname, "."));
    };
    return Child;
}(Parent));
var c = new Child('John', 'Rita', 'Tom');
c.details();
