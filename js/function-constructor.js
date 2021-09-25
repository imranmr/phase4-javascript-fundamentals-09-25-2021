//JavaScript Constructor
// non parametrised constructor
function Person(){ };

// one parametrised constructor
function User(username) {
    this.username= username;
}

// multi parametrised constructor
function Account(id,name,balance,email) {
    this.id = id;
    this.name = name;
    this.balance = balance
    this.email = email;
};

// create object of person
let person = new Person();
console.log(person);

// create object of user
let user = new User("Tony Stark");
console.log(user);
console.log(user.username);

// create object of account
let account= new Account(10001, "Mike Smith",4545.45,"mike.smith@gmail.com");
let account2= new Account(10002, "Marry Smith",784545.45,"marry.smith@gmail.com");
console.log(account);
console.log(account2);