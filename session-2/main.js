document.getElementById("dateNow").innerHTML = new Date();

// single line comment
/*
    multi line comment
*/

// Variables:
var myName = 8; // initialised
var country; // just declared

// ES6
let firstName = "Jill";
// console.log(firstName);
firstName = "Bob";
// console.log(firstName);

// let has block scope
// var has global/function scope

const PI = 3.14159; // cannot be changed

let lastName; // camel-case for variables

// variable names can start with a letter, $ or _
// use descriptive names, not just letters

// -------------------------- DATA TYPES --------------------------

// Numbers
// (integers and decimals)
let numberOfSubscribers = 100000000;
// console.log(numberOfSubscribers);
numberOfSubscribers = 100_000_000; // this is equivalent
// console.log(numberOfSubscribers);
let price = 99.99;

// Strings
let reviewComments = "This is a string";

// careful combining data types
let numOfAnimals = 12;
let numOfPeople = "12";
let totalNum = numOfAnimals + numOfPeople;
// console.log(totalNum);

// String literals
let zooComments = `The number of animals in a zoo is ${numOfAnimals}`; // can also be used for newlines
console.log(zooComments);

// Arrays
// ordered, 0-based index
let names = ["John", "Lauren", "Art"];
let mixedArray = [12, "Hello", true, 99.3];

const countries = ["England", "France"];
// can still add elements
countries.push("Spain");
console.log(countries);

// Objects
const productInfo = {
  name: "Heater",
  manufacturer: "Sony",
  price: 99.99,
  reviews: [],
};
console.log(productInfo);

const review = {
  date: new Date(),
  comment: "Great",
  stars: 3,
};

productInfo.reviews.push(review);
console.log(productInfo);

productInfo["reviews"].push({
  date: new Date(),
  comment: "Another review",
  stars: 4,
});
console.log(productInfo);

// Booleans
let isItRaining = false;

// Null
let response = null;

// Undefined
let score;

// Checking data type
console.log(typeof score);

// Multi-dimensional array
let shoppingBasket = [
  ["Apples", 2, 0.34],
  ["Pears", 4, 0.66],
];
console.log(shoppingBasket[0][0]); // Apples

// JSON

// this is not JSON
const person = {
  name: "Matt Sam",
  age: 23,
  address: {
    street: "1st St",
  },
};
console.log("As object:", person);

console.log(`As JSON: ${JSON.stringify(person)}`);

const car = {
  manufacturer: "Ford",
  model: "Fiesta",
  describe() {
    return `${this.manufacturer} ${this.model}`;
  },
};
console.log(car.describe());

// convert object to JSON string
// (can't use if object contains a method)
const personAsStr = JSON.stringify(person);
console.log(personAsStr);

// convert JSON string to object
const personAsObj = JSON.parse(personAsStr);
console.log(personAsObj);

let name = "Raleigh";
let bike = {
  name,
};

// Dates
const dateNow = new Date();
console.log(dateNow);
