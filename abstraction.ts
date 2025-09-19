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
  public damagePerSecond1(): number {
    return this.damage * this.attackSpeed;
  }
  public abstract damagePerSecond2(): number;
}

class Goblin extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }

  public damagePerSecond(): any {
    console.log(
      "Name: " +
        this.name +
        " " +
        "\n" +
        "damagePerSecond: " +
        this.damage * this.attackSpeed
    );
  }
  public damagePerSecond2(): any {
    console.log(
      "Name: " +
        this.name +
        " " +
        "\n" +
        "damagePerSecond2: " +
        (this.damage + this.attackSpeed)
    );
  }
}
class Goblin1 extends Character {
  constructor(name: string, damage: number, speed: number) {
    super(name, damage, speed);
  }

  public damagePerSecond(): any {
    console.log(
      "Name: " +
        this.name +
        " " +
        "\n" +
        "damagePerSecond: " +
        this.damage / this.attackSpeed
    );
  }
  public damagePerSecond2(): any {
    console.log(
      "Name: " +
        this.name +
        " " +
        "\n" +
        "damagePerSecond2: " +
        (this.damage + this.attackSpeed)
    );
  }
}

// let c = new Character('ABC', 123, 123);//Cannot create an instance of an abstract class
// Character.damagePerSecond();

let g = new Goblin("ABC", 123, 123);
g.damagePerSecond();
console.log("Non Abstract Method"+g.damagePerSecond1());
g.damagePerSecond2();
let g1 = new Goblin1("ABCD", 1234, 1234);
g1.damagePerSecond();
console.log(g1.damagePerSecond1());
g1.damagePerSecond2();
