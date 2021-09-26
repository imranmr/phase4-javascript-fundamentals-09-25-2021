let userMap = new Map();

//use set method to add key value in map
userMap.set("id",100000111);  // key is string & value is number
userMap.set("email","john.smith@gmail.com");  // key is string & value is string
userMap.set(1000111, "John Smith");  // key is number & value is string
userMap.set(true,"Married");   // key is boolean & value is string
userMap.set(null,"empty");   // key is null & value is string


console.log(userMap);

//acces values
console.log(userMap.get("id"));
console.log(userMap.get(true));
console.log(userMap.get(null));

//get keys 
console.log("Keys : " , userMap.keys());

//get value 
console.log("values : " , userMap.values());

//iterate over map
for(let key of userMap.keys()) {
    console.log("Key : " +key +" values : "+userMap.get(key));
}
