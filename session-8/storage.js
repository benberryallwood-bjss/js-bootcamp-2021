// Storage: cookies, localStorage and sessionStorage

// Local Storage:
// Useful for storing something even when page refreshed
// (e.g. keeping the score for rock paper scissors)
// Kept indefinitely, so remove things you don't want anymore

// Adding a new item to local storage
localStorage.setItem("name", "foo");
localStorage.setItem("sport", "rugby");

// Retrieve sport from local storage
const sportValue = localStorage.getItem("sport");
console.log(sportValue);

// Adding array to local storage
const countries = ["France", "Germany"];
localStorage.setItem("countries", JSON.stringify(countries));

// Retrieve array from local storage
console.log(JSON.parse(localStorage.getItem("countries")));

// Adding object to local storage
const product = {
  name: "Coke",
  price: "1.50",
};
localStorage.setItem("product", JSON.stringify(product));

// Retrieve object from local storage
console.log(JSON.parse(localStorage.getItem("product")));

// Remove items when no longer wanted
localStorage.removeItem("product");
localStorage.removeItem("sport");
localStorage.removeItem("countries");
localStorage.removeItem("name");

// ------------------------------------
// Session Storage
// Is not kept when browser is closed and reopened (localStorage is kept)
// Might use for a shopping basket on an online shop

// Check if session storage can be used:
if (sessionStorage) {
  // do something
}

sessionStorage.setItem("id", 12345678);
// Same principles apply for storing arrays and objects as for localStorage

// Can also remove sessionStorage, but less necessary
sessionStorage.removeItem("id");

// ------------------------------------
// Cookies
// Must put expiry time when creating cookies
// Most likely won't have to use this

// It's rare to do it like this
document.cookie = `name=John Doe; expires=${new Date(
  2025,
  0,
  1
).toUTCString()}`;
