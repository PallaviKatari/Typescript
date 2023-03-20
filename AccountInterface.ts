interface ISavingsAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
interface ICurrentAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
class Account implements ISavingsAccount, ICurrentAccount {
    acc_id: number;
    acc_name: string
    constructor(accid: number, accname: string) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    balance(amount?: any, interest?: any) {
        if (interest != null) {
            console.log(amount + (amount * interest));
        }
        else {
            console.log(amount);

        }

    }

}
let sav: ISavingsAccount = new Account(1, 'John');
sav.balance(1000, 0.4);
let cur: ICurrentAccount = new Account(1, 'John');
sav.balance(1000);
