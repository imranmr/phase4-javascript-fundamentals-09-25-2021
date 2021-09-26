class AccountUser {
    //constructor
    constructor(id, username, balance, isActive) {
        this.id = id;
        this.username = username;
        this.balance = balance;
        this.isActive = isActive;
    }
    //get & set es6
    get Id() { return this.id; }
    ;
    set Id(id) { this.id = id; }
    get Username() { return this.username; }
    ;
    set Username(username) { this.username = username; }
    showBalance() {
        return this.balance;
    }
    withdraw(amount) {
        return this.balance -= amount;
    }
    deposit(amount) {
        return this.balance += amount;
    }
}
let accountUser = new AccountUser(989765, "Tony Stark", 8908978.34, true);
console.log(accountUser);
console.log("The Balance : ", accountUser.showBalance());
console.log("After withdraw balance : ", accountUser.withdraw(545456));
console.log("After deposit balance : ", accountUser.deposit(545456));
console.log(accountUser.Id);
console.log(accountUser.Username);
accountUser.Id = 35467786663;
accountUser.Username = "Arria Stark";
console.log(accountUser.Id);
console.log(accountUser.Username);
