// get and set methods in es6
class Account {
    
    constructor(id,username,balance){
        this.id = id;
        this.username = username;
        this.balance = balance;
    }

    // get & set
    get Id() { return this.id;  }
    set Id(id) {  this.id = id; }

    get Name() { return this.username;  }
    set Name(username) {  this.username = username; }

    get Balance() { return this.balance;  }
    set Balance(balance) {  this.balance = balance; }


    showBalance() {
        return this.balance;
    }

    withdraw(amount){
        return this.balance -= amount;
    }

    deposit(amount){
        return this.balance += amount;
    }
}

let account = new Account("87713123","John Smith",100000.23);

console.log(account);
console.log(account.id);
console.log(account.Id);

console.log(account.username);
console.log(account.Name);

account.Name="Mike Smith";
account.Id = 9087687878;

console.log(account.Id);
console.log(account.Name);

console.log("The balance: " , account.showBalance());
console.log("The balance: " , account.withdraw(3000));
console.log("The balance: " , account.deposit(3000));