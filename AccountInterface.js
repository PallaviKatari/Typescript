var Account = /** @class */ (function () {
    function Account(accid, accname) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    Account.prototype.balance = function (amount, interest) {
        if (interest != null) {
            console.log(amount + (amount * interest));
        }
        else {
            console.log(amount);
        }
    };
    return Account;
}());
var sav = new Account(1, 'John');
sav.balance(1000, 0.4);
var cur = new Account(1, 'John');
sav.balance(1000);
