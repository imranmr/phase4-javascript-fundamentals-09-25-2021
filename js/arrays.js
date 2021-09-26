
//declare array
let listOfnames = ["John","Mike","David",320923,true,"Walliam"];

// declare object literal
let user = {
  name:"Mike",
  age: 20
}

let showName = function(name) {
    console.log("Hello user ", name);
}

console.log(listOfnames[3]);

listOfnames[3]= "Mike123";

//push : allows to add data at the end of an array
listOfnames.push("Tony");

// unsift : allows to add data in the begining of an array
listOfnames.unshift("Mr.");

// pop : allows to remove data from the end of an array
listOfnames.pop();

// shit : remove data in the begining of an array
listOfnames.shift();

listOfnames.push(user);

listOfnames.push(showName);


console.log(listOfnames);