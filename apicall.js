"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUsers() {
    // For now, consider the data is stored on a static `users.json` file
    return fetch('/users.json')
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res;
    });
}
//When we call the getUsers function, 
//Typescript knows that we’re supposed to get back a list of User types, 
//and so we can make use of type annotations:
getUsers()
    .then(users => {
    //map- to loop through all the elements from the json
    console.log(users.map(u => u.name + ' ' + u.age + '\n').toString());
});
function getfakeAPI() {
    //Access data from fakeAPI
    //https://jsonplaceholder.typicode.com/posts
    fetch('https://fakestoreapi.com/products')
        //fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
}
getfakeAPI();
//# sourceMappingURL=apicall.js.map