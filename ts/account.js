var Account = /** @class */ (function () {
    //constructor
    function Account(id, username, balance, isActive) {
        this.id = id;
        this.username = username;
        this.balance = balance;
        this.isActive = isActive;
    }
    Account.prototype.showBalance = function () {
        return this.balance;
    };
    Account.prototype.withdraw = function (amount) {
        return this.balance -= amount;
    };
    Account.prototype.deposit = function (amount) {
        return this.balance += amount;
    };
    return Account;
}());
var account = new Account(989765, "Tony Stark", 8908978.34, true);
console.log(account);
console.log("The Balance : ", account.showBalance());
console.log("After withdraw balance : ", account.withdraw(545456));
console.log("After deposit balance : ", account.deposit(545456));
