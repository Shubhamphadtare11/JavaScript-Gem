//1. First class functions

// function square(num){
//     return num*num
// }
// function displaySquare(fn){
//     console.log("Square is " + fn(5))
// }
// displaySquare(square);

//2. callback function

// function greeting(message){
//     console.log("Good morning: " + message)
// }

// function processUserInput(cb){
// var name = prompt("Please enter name:");
// cb(name);
// }

// processUserInput(greeting);

//3. local storage with json stringify

// let user = {
//     name:"Shubham",
//     age:25,
// };

// let userObj = JSON.stringify(user);

// localStorage.setItem("data",userObj);

//4. destructuring object inside object

// let user = {
//     name:"ShubhamP",
//     age:25,
//     fullName:{
//         first:"Shubham",
//         last:"Phadtare",
//     }
// };

// let {name,age,fullName}=user;
// let {first,last}=fullName;
// console.log(first)

//5.
//var is function scope

// console.log(greeting);//undefined
// var greeting="Hi Global";
// function sayHello() {
//     var greeting = "Hello Shubham"
//     if (true) {
//       var greeting = "Hello"
//     }
//     console.log(greeting);//Hello 
//   }
//   console.log(greeting);//Hi Global
//   sayHello()
//   console.log(greeting);//Hi Global

  //let is block scope

//   function sayHello() {
  
//     let greeting = "Hello Shubham"
//     if (true) {
//       let greeting = "Hello"
//     }
//     console.log(greeting);//Hello Shubham
//   }
  
//   sayHello()


//hoisting

function sayHello() {
    // var greeting
    console.log(greeting) // undefined
    if (true) {
      greeting = "Hello"
    }
  }
  
  sayHello()