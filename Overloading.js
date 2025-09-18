function add() {
  //default function
  if (arguments.length == 0) {
    var a = 2;
    console.log(a * a);
  }
  //function with 2 parameters
  else if (arguments.length == 1) {
    console.log("Function with 1 parameter");
    console.log(arguments[0] * arguments[0]);
  }
  //function with 2 parameters
  else if (arguments.length == 2) {
    console.log("Function with 2 parameters");
    console.log(arguments[0] * arguments[1]);
  } else {
    var sum = 1;
    var length = arguments.length; //3
    //i<3
    for (var i = 0; i < length; i++) {
      sum *= arguments[i];
    }
    console.log(sum);
  }
}

//Overloading add()
add();
add(10);
add(2, 2);
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3);
