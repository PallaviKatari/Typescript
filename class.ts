//Class in Typescript
class Car {
    public model: string;
    public color: string;
    public isElectric: boolean;

    constructor(model: string, color: string, isElectric: boolean) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }

    public drive(): void {
        //const engineStarted: boolean = this.startEngine();
        //console.log("Engine started: " + engineStarted);
        console.log(`${this.model}`);
        console.log(this.model + ' ' + this.color + ' ' + this.isElectric);
        // some method to drive after starting the engine
    }
    private startEngine(): boolean {
        // some method to start the engine    
        return true;
    }
}

//instance for the class Car
let a = new Car('Tiago', 'Black', true);
a.drive(); //Invoke the function drive using the object a