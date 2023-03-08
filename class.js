//Class in Typescript
var Car = /** @class */ (function () {
    function Car(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    Car.prototype.drive = function () {
        //const engineStarted: boolean = this.startEngine();
        //console.log("Engine started: " + engineStarted);
        console.log("".concat(this.model));
        console.log(this.model + ' ' + this.color + ' ' + this.isElectric);
        // some method to drive after starting the engine
    };
    // public drive(model: string, color: string, isElectric: boolean): void {
    //     //const engineStarted: boolean = this.startEngine();
    //     //console.log("Engine started: " + engineStarted);
    //     this.model = model;
    //     this.color = color;
    //     this.isElectric = isElectric;
    //     console.log(` I have ${this.model} Car`);
    //     console.log(this.model + ' ' + this.color + ' ' + this.isElectric);
    //     // some method to drive after starting the engine
    // }
    Car.prototype.startEngine = function () {
        // some method to start the engine    
        return true;
    };
    return Car;
}());
//instance for the class Car
var a = new Car('Tiago', 'Black', true);
a.drive(); //Invoke the function drive using the object a
