console.log("----- SESSION 4 -----");

// destructuring:
const numbers = [1, 2, 3];

const [firstNumber] = numbers;
console.log(`firstNumber: ${firstNumber}`);

const person = {
  name: "Jill Smith",
  age: 23,
};

// rename property during destructuring
const { name: fullName } = person;
console.log(`fullName: ${fullName}`);

// ONTO SESSION 4

// || returns left if truthy, else right
console.log(0 || "LHS was falsy");

// ?? returns RHS if LHS is nullish
console.log(0 ?? "LHS was nullish");

// Chaining Operator
const zoo = {
  lions: ["leo"],
  zookeeper: { name: "Brenda" },
};

const leo = zoo.lions[0];
console.log(leo);

// assigns undefined if it doesn't exist, rather than throwing an error
const bungleTheBear = zoo.bears?.[0];
console.log(bungleTheBear);

// similar with functions that may not exist
zoo.describe?.();

// SCOPE
console.log("----- SCOPE -----");

const num = 1;

if (num > 0) {
  const num = 2;
  console.log(`Num inside is ${num}`);
}

console.log(`Num outside is ${num}`);
