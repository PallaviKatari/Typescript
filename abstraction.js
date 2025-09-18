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
//Abstraction Typescript
var Character = /** @class */ (function () {
    function Character(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
    Character.prototype.damagePerSecond1 = function () {
        return this.damage * this.attackSpeed;
    };
    return Character;
}());
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin(name, damage, speed) {
        return _super.call(this, name, damage, speed) || this;
    }
    Goblin.prototype.damagePerSecond = function () {
        console.log("Name: " +
            this.name +
            " " +
            "\n" +
            "damagePerSecond: " +
            this.damage * this.attackSpeed);
    };
    Goblin.prototype.damagePerSecond2 = function () {
        console.log("Name: " +
            this.name +
            " " +
            "\n" +
            "damagePerSecond: " +
            (this.damage + this.attackSpeed));
    };
    return Goblin;
}(Character));
var Goblin1 = /** @class */ (function (_super) {
    __extends(Goblin1, _super);
    function Goblin1(name, damage, speed) {
        return _super.call(this, name, damage, speed) || this;
    }
    Goblin1.prototype.damagePerSecond = function () {
        console.log("Name: " +
            this.name +
            " " +
            "\n" +
            "damagePerSecond: " +
            this.damage / this.attackSpeed);
    };
    Goblin1.prototype.damagePerSecond2 = function () {
        console.log("Name: " +
            this.name +
            " " +
            "\n" +
            "damagePerSecond: " +
            (this.damage + this.attackSpeed));
    };
    return Goblin1;
}(Character));
// let c = new Character('ABC', 123, 123);//Cannot create an instance of an abstract class
// Character.damagePerSecond();
var g = new Goblin("ABC", 123, 123);
g.damagePerSecond();
console.log(g.damagePerSecond1());
g.damagePerSecond2();
var g1 = new Goblin1("ABCD", 1234, 1234);
g1.damagePerSecond();
console.log(g1.damagePerSecond1());
g1.damagePerSecond2();
