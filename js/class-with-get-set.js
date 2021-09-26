class Account {
    
    constructor(id,username,balance){
        this.id = id;
        this.username = username;
        this.balance = balance;
    }

    // get & set
    getId() { return this.id;  }
    setId(id) {  this.id = id; }

    getName() { return this.username;  }
    setName(username) {  this.username = username; }

    getBalance() { return this.balance;  }
    setBalance(balance) {  this.balance = balance; }


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
console.log(account.getId());

console.log(account.username);
console.log(account.getName());

account.setName("Mike Smith");
account.setId(9087687878);

console.log(account.getId());
console.log(account.getName());

console.log("The balance: " , account.showBalance());
console.log("The balance: " , account.withdraw(3000));
console.log("The balance: " , account.deposit(3000));