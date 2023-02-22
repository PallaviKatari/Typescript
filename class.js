var Car = /** @class */ (function () {
    function Car(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    Car.prototype.drive = function () {
        var engineStarted = this.startEngine();
        console.log("Engine started: " + engineStarted);
        console.log(this.model + ' ' + this.color + ' ' + this.isElectric);
        // some method to drive after starting the engine
    };
    Car.prototype.startEngine = function () {
        // some method to start the engine    
        return true;
    };
    return Car;
}());
var a = new Car('Tiago', 'Black', true);
a.drive(); //Invoke the function drive using the object a