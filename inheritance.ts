//Inheritance in Typescript
class Parent {
    public fathername: string;
    public mothername: string;

    constructor(fname: string, mname: string) {
        this.fathername = fname;
        this.mothername = mname;
    }

    public details(): void {
        console.log('Parents Details' + '\n' + this.fathername + '\n' + this.mothername);
    }
}

class Child extends Parent {
    public childname: string;

    constructor(dad: string, mom: string, kid: string) {
        super(dad, mom); //John,Rita

        this.childname = kid; //Tom
    }

    public details(): void {
        super.details();
        console.log(`Kid's name: ${this.childname}.`);
    }
}

let c = new Child('John', 'Rita', 'Tom');
c.details();