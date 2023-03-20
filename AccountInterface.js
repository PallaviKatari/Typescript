var Account = /** @class */ (function () {
    function Account(accid, accname) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    Account.prototype.balance = function (amount, interest) {
        console.log("ACCOUNT DETAILS");
        console.log("Account Number:".concat(this.acc_id));
        console.log("Account Name:".concat(this.acc_name));
        if (interest != null) {
            console.log("SAVINGS ACCOUNT BALANCE: ", amount + (amount * interest));
        }
        else {
            console.log("CURRENT ACCOUNT BALANCE: " + amount);
        }
    };
    return Account;
}());
var balance = 10000;
var sav = new Account(1, 'John');
sav.balance(balance, 0.4);
var cur = new Account(1, 'John');
cur.balance(balance);
