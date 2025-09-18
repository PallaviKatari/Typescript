//Encapsulation in Typescript
var Encapsulation = /** @class */ (function () {
    function Encapsulation(name) {
        this._name = name;
    }
    Encapsulation.prototype.getname = function () {
        console.log("Name: " + this._name);
    };
    Encapsulation.prototype.setname = function (value) {
        this._name = value;
    };
    return Encapsulation;
}());
var e = new Encapsulation("John");
e.getname();
e.setname('John Doe');
e.getname();
//console.log("Name: " + this._name);//Cannot access outside the class
