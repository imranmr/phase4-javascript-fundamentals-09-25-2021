// function expression it is a syntax to declare function with varaible assignment
// 1. labeled function expression     2. anonymous function expression
// var identifier = fName() { // body }

// function expression 
// 1. labeled function expression  
let totalSum = function showData() {
    let x =100;
    let y=200;
    console.log("The result : ",x+y);
}
console.log(totalSum);

//call function expression
totalSum();
// showData();  // Uncaught ReferenceError: showData is not defined


// 2. anonymous function expression
let printData = function() {
    console.log("Hello, anonymous function expression");
}

printData();
// printData();

// 2.1 anonymous function expression with parameters
let buildData = function (name,age,description) {
    console.log(`Hello user, ${name}, your age is : ${age}`);
    console.log(`Your description is : ${description}`);
}

buildData("John SMith",34,"Canadian");
buildData("Vijay Kumar",30,"Indian");