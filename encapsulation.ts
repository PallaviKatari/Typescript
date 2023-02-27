//Encapsulation in Typescript
class Encapsulation {
    private _name: string;

    // constructor(name: string) {
    //     this._name = name;
    // }

    public getname(): any {
        console.log("Name: " + this._name);
    }

    public setname(value: string) {
        this._name = value;
    }
}
let e = new Encapsulation();
e.setname('John Doe');
e.getname();
//console.log("Name: " + this._name);//Cannot access outside the class

