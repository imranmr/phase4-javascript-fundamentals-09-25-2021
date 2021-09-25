// arithmatic operations
// add , sub , mul , div, avg
// function callback

//add
let add = function(a,b){
    return a+b;
}

let sub = function(a,b){
    return a-b;
}

let mul = function(a,b){
    return a*b;
}

let div = function(a,b){
    return a/b;
}

let avg = function(a,b){
    return (a+b)/2;
}

function calculator(num1,num2, callback){
    return callback(num1,num2);
}

let x = 1000;
let y = 500;


let response = calculator(x,y,add);
console.log(`The ${x} + ${y} is : ${response}`);

console.log(`The ${x} - ${y} is : ${calculator(x,y, sub)}`);
console.log(`The ${x} * ${y} is : ${calculator(x,y, mul)}`);
console.log(`The ${x} / ${y} is : ${calculator(x,y, div)}`);
console.log(`The ${x} & ${y} avg is : ${calculator(x,y, avg)}`);