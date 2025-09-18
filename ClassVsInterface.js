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
        console.log("".concat(this.ename, " - eDevelop an app in ").concat(this.eposition));
    };
    return Developer;
}());
var dev = new Developer("John", "Angular", "Peter", "React");
dev.develop();
dev.edevelop();
