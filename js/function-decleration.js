// function declearation
// systax
// function functionName () {   // body };
// functioondecleration / fn definition  : non a parametrised 
function showMessage() {
    console.log("Hello user, welcome to Javascript !");
}

// function calling
showMessage();

// one paramertised function
function displayMessage(username) {
    console.log("Hello, "+username +" welcome to Javascript !");
}

// multi paramertised function
function fetchContent(name, age, gender) {
    if(typeof name=='string' && typeof age =='number' && typeof gender=='string') {
        console.log(`Hello user, ${name} your age is ${age} and your gender is ${gender}`);
    } else {
        console.error("Invalid Types Parameters !")
    }
}

// default parametrised function
function getContent(username="New user",phoneNo="1010101010") {
    console.log(` Hello user ${username} & your number is ${phoneNo}`);
}


// function calling
displayMessage("Mike Smith"); // username ="Mike Smith"
displayMessage(); // username=undefined
fetchContent("John Snow",30,"male");
fetchContent();
fetchContent(45,"David",true);

getContent("William Smith",887973434);
getContent();