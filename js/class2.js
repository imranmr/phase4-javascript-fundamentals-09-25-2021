// JavaScript class : It is added from es6 , as a new syntax to declare OOP
class Person {

    // constructor 
    constructor(id,name,age,email) {
        this.id= id;
        this.name= name;
        this.age= age;
        this.email = email;
    }

    //methods
    printData() {
        console.log(` Hi user , ${this.name} & your age is ${this.age}`);
    }

    makeData = function (email) {
        return this.email = email ;
    }

}

let person = new Person(10001,"John Smith",32,"john.smith@gmail.com");

console.log(person);

console.log(person.id);
console.log(person.email);
person.printData();
console.log(person.makeData("johnjohn@gmail.com"));