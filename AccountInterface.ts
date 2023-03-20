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
        console.log("ACCOUNT DETAILS");
        console.log(`Account Number:${this.acc_id}`);
        console.log(`Account Name:${this.acc_name}`);
        if (interest != null) {
            console.log("SAVINGS ACCOUNT BALANCE: ", amount + (amount * interest));
        }
        else {
            console.log("CURRENT ACCOUNT BALANCE: "+amount);

        }
    }
}
let balance=10000;
let sav: ISavingsAccount = new Account(1, 'John');
sav.balance(balance, 0.4);
let cur: ICurrentAccount = new Account(1, 'John');
cur.balance(balance);
