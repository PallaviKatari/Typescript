//Abstraction Typescript
abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }

    public abstract damagePerSecond(): number;
}

class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): any {
        console.log("Name: " + this.name + " " + "\n" + "damagePerSecond: " + this.damage * this.attackSpeed);
    }
}
class Goblin1 extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): any {
        console.log("Name: " + this.name + " " + "\n" + "damagePerSecond: " + this.damage / this.attackSpeed);
    }
}

// let c = new Character('ABC', 123, 123);//Cannot create an instance of an abstract class
// Character.damagePerSecond();

let g = new Goblin('ABC', 123, 123);
g.damagePerSecond();
let g1 = new Goblin1('ABC', 123, 123);
g1.damagePerSecond();

