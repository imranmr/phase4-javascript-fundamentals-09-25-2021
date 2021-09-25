
// anonymous function expression
let printData = function() {
    console.log("Hello, anonymous function expression");
}

//arrow function  =>
let makeData = () =>  {
    console.log("Hello, Arrow Function Here !");
}

//parametrised arrow function
let sendData = (name,age,gender) =>  {
    console.log("Hello, ",name);
    console.log("Age, ",age);
    console.log("gender, ",gender);
}

// one line arrow
let onLineData = () =>  console.log("Hello, One line Arrow Function Here !");

let ageCalculator = (name,yearOfBirth) =>  console.log(`Hello user, ${name} and your age is ${2021-yearOfBirth}`);


printData();
makeData();
sendData("John Smith",30,"male");
console.log("--------------");
onLineData();

ageCalculator("John Snow",1909);
ageCalculator("Arria Snow",1999);
