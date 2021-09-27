// RECAP: OBJECTS
console.log("----- RECAP: OBJECTS -----");
const album = {
  title: "21",
  artist: "Adele",
  year: 2000,
  songs: [
    {
      name: "Hello",
    },
    {
      name: "Rolling in the deep",
    },
  ],
  info() {
    return `${this.title} was created by ${this.artist}`;
  },
};

console.log(album);
// Access object properties using dot notation
console.log(`Artist is ${album.artist}`);
console.log(album.info());

// JSON:
console.log("----- RECAP: JSON -----");
const product = {
  name: "Samsung TV",
  saleItem: false,
  dimensions: [
    {
      width: 1220,
      height: 900,
    },
  ],
};

let productAsStr = JSON.stringify(product);
console.log(productAsStr);

// JSON back to object
let productBackAsObject = JSON.parse(productAsStr);

// END OF RECAP
// START OF SESSION 3:

console.log("----- SESSION 3 -----");
console.log("----- STRINGS -----");

const firstName = "Bob Smith";
console.log(`firstName: ${firstName}`);

console.log(`firstName.length: ${firstName.length}`);

console.log(`firstName.toLowerCase(): ${firstName.toLowerCase()}`);
console.log(`firstName.toUpperCase(): ${firstName.toUpperCase()}`);

console.log(`firstName.substr(0, 3): ${firstName.substr(0, 3)}`);

const phoneNumber = "032 424 234 234";
console.log(`phoneNumber: ${phoneNumber}`);

const phoneParts = phoneNumber.split(" ");
console.log(`phoneNumber.split(" "): ${phoneParts}`);

const emailAddress = "foo@bar.com";
console.log(`emailAddress: ${emailAddress}`);
// indexOf returns -1 if doesn't contain arg
const indexOfAtSymbol = emailAddress.indexOf("@");
console.log(`emailAddress.indexOf("@"): ${indexOfAtSymbol}`);

// Arrays:
console.log("----- ARRAYS -----");

// High Order Functions:
// function that takes another function as arg
// or returns a function

const countries = [
  "England",
  "France",
  "Germany",
  "Spain",
  "Zimbabwe",
  "Italy",
];
console.log(`Countries: ${countries}`);

// const matchedCountries = countries.filter(function (country) {
//   return country.toLowerCase().startsWith("z");
// });

// equivalent to above (better)
const matchedCountries = countries.filter((country) =>
  country.toLowerCase().startsWith("z")
);

console.log(`Matched ${matchedCountries}`);

// MAP:
// transform the array
const people = [
  { name: "Ben Berry-Allwood", title: "Mr" },
  { name: "Assad Ahmad", title: "Mr" },
];

// const upperCasedPeopleWithDates = people.map(function (person) {
//   return {
//     name: person.name.toUpperCase(),
//     title: person.title,
//     dateCreated: new Date(),
//   };
// });
// console.log(upperCasedPeopleWithDates);

// ES6 version
const upperCasedPeopleWithDates = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date(),
  };
});
console.log(upperCasedPeopleWithDates);

// SOME:
const fruit = ["apple", "pear", "grape"];

const fruitResult = fruit.some((fruit) => fruit === "apple");
console.log(fruitResult);

// SOME WITH OBJECTS:
const footballTeams = [
  {
    name: "Manchester United",
    nationalities: ["Portugese", "English", "French"],
  },
  {
    name: "Liverpool",
    nationalities: ["Egyptian", "Brazilian"],
  },
];

const hasEnglishPlayers = footballTeams.some((team) => {
  return team.nationalities.includes("English");
});

console.log(hasEnglishPlayers);

// SORT:
console.log("----- SORT -----");

console.log("-- Letters --");
let letters = ["z", "b", "k"];
console.log(`Unsorted: ${letters}`);

const sortedLetters = letters.sort((a, b) => (a > b ? 1 : -1));
console.log(`Sorted: ${sortedLetters}`);

console.log("-- Numbers --");
let numbers = [2, 1, 43, 20];
console.log(`Numbers: ${numbers}`);

numbers.sort((a, b) => a - b);
console.log(`Sorted numbers: ${numbers}`);

console.log("-- Animals --");
let animals = ["lion", "Zebra", "turtle"];
console.log(`Unsorted: ${animals}`);
// capitals mess things up
const sortedAnimals = animals.sort((a, b) => {
  return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
});
console.log(`Sorted: ${sortedAnimals}`);

// LENGTH OF ARRAY:
console.log("----- LENGTH -----");
console.log(`Animals array has length ${animals.length}`);

// INDEX OF ELEMENT:
console.log("----- INDEXOF -----");
console.log(`Turtle at position ${animals.indexOf("turtle")}`);

// PUSH:
console.log("----- PUSH -----");
const places = [];
places.push({
  name: "Barcelona",
  population: 10_000_000,
});
console.log("Places:", places);
// outputs value from later even though not changed yet

places.push({
  name: "Bristol",
  population: 2_000_000,
});
console.log("Places:", places);

// POP:
console.log("----- POP -----");
console.log("places.pop() returns:", places.pop());
console.log("Places:", places);

// SHIFT:
console.log("----- SHIFT -----");
places.push({
  name: "Lisbon",
  population: 23_000_000,
});
console.log("Places:", places);

console.log(places.shift());
console.log("Places:", places);

// UNSHIFT
console.log("----- UNSHIFT -----");
places.unshift({
  name: "Tokyo",
  population: 999_000_000,
});
console.log("Places:", places);

// OBJECT DESTRUCTURING
console.log(" -----OBJECT DESTRUCTURING -----");

const person = {
  personName: "John",
  address: {
    street: "1st Street",
    city: "London",
    postcode: "L1",
  },
  hobbies: ["sports", "films", "music"],
};
console.log("Person:", person);

// use curly braces for object destructuring
const { personName, address, hobbies } = person;
console.log(`Name: ${personName}`);
console.log("Address:", address);
console.log(`Hobbies: ${hobbies}`);
// assigns values to new variables in current scope
const {
  address: { street },
} = person;
console.log(`Street: ${street}`);

// WITH ARRAYS
// use square brackets for arrays
console.log("-- WITH ARRAYS --");
const productDetails = ["samsung", "large tv"];
const [detailOne] = productDetails; // takes first item in array
console.log(`detailOne: ${detailOne}`);

// ----- OPERATORS -----
console.log("----- OPERATORS -----");

let firstNumber = 1;
console.log(`firstNumber: ${firstNumber}`);
console.log(`firstNumber++: ${firstNumber++}`);
console.log(`++firstNumber: ${++firstNumber}`);
console.log(`firstNumber += 2: ${(firstNumber += 2)}`);
console.log(`firstNumber -= 2: ${(firstNumber -= 2)}`);
console.log(`firstNumber--: ${firstNumber--}`);
console.log(`--firstNumber: ${--firstNumber}`);

// modulus
console.log(`5 % 2: ${5 % 2}`);

// negation
console.log(`!true: ${!true}`);
console.log(`"happy" !== "sad": ${"happy" !== "sad"}`);

// ----- EQUALITY -----
console.log("----- EQUALITY -----");

console.log(`"12" == 12: ${"12" == 12}`);
console.log(`"12" === 12: ${"12" === 12}`);
