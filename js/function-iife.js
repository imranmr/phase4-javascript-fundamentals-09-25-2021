// Imediately invoked function expression. -> self executing function
(function(){
    console.log("IIFE: Imediately invoked function expression");
})();

(function(){
    let username = "John Smith";
    let age = 30;
    console.log(username,age);
    //nested function
    function display(age) {
        console.log(`Hello user, ${username}`);
        console.log("Your age :",age);
    }
    display(age);
})();

//IIFE : with arrow function.
(()=>{
    console.log("Hello");
})();