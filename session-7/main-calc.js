const { add, divide, PI } = require("./calculator");
// Alternative to import all exports:
// const Calculator = require("./calculator");
// Then use Calculator.add(1, 2); etc.

console.log(add(1, 2, 3));
console.log(divide(9, 3));
console.log(PI);
