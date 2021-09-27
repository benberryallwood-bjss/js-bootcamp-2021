// CONDITIONALS
console.log("CONDITIONALS");

// if (/*expression*/) {
//   // run is expression is true
// }

// if .. else if .. else
// etc.

// TERNARY OPERATOR
console.log("TERNARY OPERATOR");

const amount = 100;
console.log(100 > 50 ? true : false);

// SWITCH STATEMENTS
console.log("SWITCH STATEMENTS");

const coinInserted = 50;

switch (coinInserted) {
  case 20:
  case 50:
  case 100:
    console.log(`Inserted ${coinInserted}p`);
    break;
  default:
    console.log("This machine only accepts 20p, 50p and £1");
}
