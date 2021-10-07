console.log("Session 8");

console.log("More about modularisation");

import reverseArr, {
  sumAllNumbers as sum,
  existsInArr,
} from "./array-functions.js";

// Class import
import Car from "./Car.js";

// Alternative:
// import * as ArrayFuncs from "./array-functions.js";

const arr = [1, 2, 3, "hello"];

console.log(sum(arr));

console.log(existsInArr(arr, 1));

console.log(reverseArr(arr));

// new instance of Car
const ford = new Car("Ford", "Fiesta");

console.log(ford);
