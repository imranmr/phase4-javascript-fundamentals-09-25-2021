// var :  var keyword has function level scope -> reasign value
// let : let keyword has block level scope  -> reasign value
// const : const keyword has block level scope -> can not reasign value
function display() {
  var flag = true;

  if (flag) {
    var item1 = "Mac book Xyz series";
    let item2 = "Dell Laptop xyz series";
    const item3 = "Lenovo Laptop xyz series";

    item2 = "Asus Gamming Laptop!";

    // item3 = "Iphne 11 max pro."  // Uncaught TypeError: Assignment to constant variable.
    console.log(item1);
    console.log(item2);
    console.log(item3);
  }

  console.log(item1);
  // console.log(item2);  // Uncaught ReferenceError: item2 is not defined
  // console.log(item3);  //Uncaught ReferenceError: item2 is not defined
}

display();
