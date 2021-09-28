console.log("functions.js");

// Hoisting
// only works with function declaration
sayMessage();
//sayMessage2();
// Best practice: don't use this, always define functions first

// Function declaration:
function sayMessage() {
  console.log("Message 1");
}

// invoke the function
sayMessage();

// Function expression:
const sayOtherMessage = function () {
  console.log("Message 2");
};

sayOtherMessage();

// Invoke immediately
(function () {
  console.log("This will run immediately");
})();

//  Functions with params

//  Parameter is what the function takes
//  Argument is what you give when you call the function

function addFive(num) {
  return num + 5;
}

console.log(addFive(3));

// ES6 arrow function version
const addFiveArrow = (num) => num + 5;

// const formatPerson = (firstName, lastName, street, postcode, phone, age) => {
// too many parameters for one function
// };

// do this instead
const formatPerson = (personDetails) => {
  const { firstName, lastName, street, postcode, phone, age } = personDetails;
  return {
    name: `${firstName} ${lastName}`,
  };
};
// with object as argument

// functions should only do one thing
// SRP - Single Responsibility Principle
// DRY - Don't Repeat Yourself
