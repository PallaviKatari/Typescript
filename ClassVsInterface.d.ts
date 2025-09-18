interface IDeveloper {
    name: string;
    position: string;
    develop: () => void;
}
interface IDeveloper1 {
    ename: string;
    eposition: string;
    edevelop: () => void;
}
export declare class Developer implements IDeveloper, IDeveloper1 {
    name: string;
    position: string;
    ename: string;
    eposition: string;
    constructor(name: string, position: string, ename: string, eposition: string);
    develop(): void;
    edevelop(): void;
}
export {};
//# sourceMappingURL=ClassVsInterface.d.ts.map