// arithmatic operations
// add , sub , mul , div, avg
// function without callback
function calculator(num1,num2,calcType) {
    if(calcType==="add"){
        return num1+num2;
    } else if(calcType==="sub"){
        return num1-num2;
    } else if(calcType==="mul"){
        return num1*num2;
    } else if(calcType==="div"){
        return num1/num2;
    }
}

let x = 1000;
let y = 500;


let response = calculator(x,y,"add");
console.log(`The ${x} + ${y} is : ${response}`);

console.log(`The ${x} - ${y} is : ${calculator(x,y,"sub")}`);
console.log(`The ${x} * ${y} is : ${calculator(x,y,"mul")}`);
console.log(`The ${x} / ${y} is : ${calculator(x,y,"div")}`);
