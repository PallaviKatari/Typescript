//API Call in Typescript
// JSON - JAVASCRIPT OBJECT NOTATION - DATA TRANSFER
interface User {
  id: number;
  name: string;
  age: string;
}

function getUsers(): Promise<User[]> {
  // For now, consider the data is stored on a static `users.json` file
  return (
    fetch("http://localhost:3000/users")
      // the JSON body is taken from the response
      .then((res) => res.json())
      .then((res) => {
        // The response has an `any` type, so we need to cast
        // it to the `User` type, and return it from the promise
        return res as User[];
      })
  );
}

//When we call the getUsers function,
//Typescript knows that we’re supposed to get back a list of User types,
//and so we can make use of type annotations:

getUsers().then((users) => {
  //map- to loop through all the elements from the json
  const list = document.getElementById("userList");

  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.id}-${u.name}-(${u.age})`;
    if (list) {
      list.appendChild(li);
    }
  });
  console.log(
    users.map((u) => u.id + " " + u.name + " " + u.age + "\n").toString()
  );
});

//Client -> sends the request to the server using fetch
//Server -> sends the response to the client in JSON format
function getfakeAPI() {
  //Access data from fakeAPI
  //https://jsonplaceholder.typicode.com/posts
  //fetch('https://fakestoreapi.com/products')
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getfakeAPI();
getUsers();
