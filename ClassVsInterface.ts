interface IDeveloper {
    name: string
    position: string
    develop: () => void
}
interface IDeveloper1 {
    ename: string
    eposition: string
    edevelop: () => void
}

export class Developer implements IDeveloper, IDeveloper1 {
    name: string;
    position: string;
    ename:string;
    eposition:string;

    constructor(name: string, position: string,ename:string,eposition:string) {
        this.name = name;
        this.position = position;
        this.ename=ename;
        this.eposition=eposition;
    }

    develop(): void {
        console.log(`${this.name} - Develop an app in ${this.position}`);
    }
    edevelop(): void {
        console.log(`${this.ename} - Develop an app in ${this.eposition}`);
    }
}

let dev = new Developer("John", "Angular","Peter","React");
dev.develop();
dev.edevelop();