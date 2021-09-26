class AccountUser {

    private id:number;
    private username:string;
    private balance:number;
    private isActive:boolean;
    public bankName:string;

    //constructor
    constructor(id:number,username:string,balance:number, isActive:boolean) {
        this.id = id;
        this.username = username;
        this.balance = balance;
        this.isActive = isActive;
    }

    //get & set es6
    get Id() { return this.id };
    set Id(id:number) {  this.id = id; }

    get Username() { return this.username };
    set Username(username:string) {  this.username = username; }

    showBalance():number {
        return this.balance;
    }

    withdraw(amount):number {
        return this.balance -= amount;
    }

    deposit(amount):number {
        return this.balance += amount;
    }

}

let accountUser = new AccountUser(989765,"Tony Stark",8908978.34,true);
console.log(accountUser);
console.log("The Balance : ", accountUser.showBalance());
console.log("After withdraw balance : " ,accountUser.withdraw(545456));
console.log("After deposit balance : ", accountUser.deposit(545456));

console.log(accountUser.Id);
console.log(accountUser.Username);

accountUser.Id = 35467786663;
accountUser.Username="Arria Stark";

console.log(accountUser.Id);
console.log(accountUser.Username);

