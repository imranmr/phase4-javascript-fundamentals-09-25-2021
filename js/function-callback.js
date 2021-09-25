
// callback  ->  When we pass a function as an argument to another function.
var x = function () {
    console.log(" I am a function - X ! called from another function.");
}

var y = function(callback) {
    console.log("I am a processing function !");
    // callback calling
    callback();
}

y(x);