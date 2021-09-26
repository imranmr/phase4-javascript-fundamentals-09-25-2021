class Account {

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

let account = new Account(989765,"Tony Stark",8908978.34,true);
console.log(account);
console.log("The Balance : ", account.showBalance());
console.log("After withdraw balance : " ,account.withdraw(545456));
console.log("After deposit balance : ", account.deposit(545456));
