const spiderman = (person) => {
    return 'Hello, ' + person;
}

let user = 'Peter Parker';
console.log(spiderman(user));

function sayHelloWorld() {
    console.log("\n");
    console.log("*** Hello World from Type Script code. ***");
    console.log("\n");
}

sayHelloWorld();

let addition = (number1: number, number2: number): number => {
    return number1 + number2;
}

// Arrow Function call
console.log(addition(50, 90));
console.log(addition(90, 90));
console.log(addition(100, 90));

