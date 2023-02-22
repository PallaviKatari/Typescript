var spiderman = function (person) {
    return 'Hello, ' + person;
};
var user = 'Peter Parker';
console.log(spiderman(user));
function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. ***");
    console.log("\n");
}
sayHelloWorld();
var addition = function (number1, number2) {
    return number1 + number2;
};
// Arrow Function call
console.log(addition(50, 90));
console.log(addition(90, 90));
console.log(addition(100, 90));
//
function myFunction() {
    document.getElementById("myAnchor").innerHTML = "Google";
    document.getElementById("myAnchor").href = "https://www.google.com";
    document.getElementById("myAnchor").target = "_blank";
}
