//Polymorphism in Typescript - Method Overriding
class Parent1 {
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

class Child1 extends Parent1 {
    public childname: string;

    constructor(dad: string, mom: string, kid: string) {
        super(dad, mom);

        this.childname = kid;
    }

    public details(): void {
        super.details();
        console.log(`Kid's name: ${this.childname}.`);
    }
}

let c1 = new Child1('John', 'Rita', 'Tom');
c1.details();