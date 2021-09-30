console.log("----- SESSION 5 -----");

// Function declaration has a global scope
function debitAccount(account, amount) {
  // this does change the account object that is outside the function
  account.total += amount;
  return account;
}

// Functions with default values
const makeCoffee = (
  coffeeType,
  coffeeOptions = { hasMilk: true, hasSugar: false, toppings: [] } // default parameter
) => {
  console.log(
    `Coffee: ${coffeeType}, Coffee Options: ${JSON.stringify(coffeeOptions)}`
  );

  let coffeeMessage = "";

  if (coffeeType === "cappuccino") {
    coffeeOptions.toppings.forEach(
      (topping) => (coffeeMessage += `Added ${topping}, `)
    );
    coffeeMessage += `Enjoy your ${coffeeType}`;
  } else {
    coffeeMessage = `Sorry, we do not sell ${coffeeType}`;
  }

  return coffeeMessage;
};

const coffeeType = "cappuccino";
const coffeeOptions = {
  toppings: ["vanilla"],
  hasSugar: true,
  hasMilk: false,
};

console.log(makeCoffee(coffeeType));

console.log("----- ERROR HANDLING -----");
const divideNumbers = (first, second) => {
  if (second === 0) {
    throw new Error("Cannot divide by zero");
  }

  return first / second;
};

let value = "";

try {
  const dividedValue = divideNumbers(10, 0);
  value = `${dividedValue}`;
} catch (err) {
  // handle error in here
  console.error(err.message);
  value = 0; // default value if function throws error
}

console.log(`divideNumbers -> ${value}`);

console.log("----- SOME MORE OPERATORS -----");

// REST OPERATOR
const createPersonObject = (firstName, lastName) => {
  return {
    fullName: `${firstName} ${lastName}`,
  };
};

console.log(createPersonObject("John", "Doe"));

// ...details is the 'rest parameter'
// creates array with the rest of the arguments passed
const createPersonObjectWithRest = (firstName, lastName, ...details) => {
  console.log(`firstName: ${firstName}, Details: ${details}`);

  // destructuring
  const [street, city, postcode] = details;
};

createPersonObjectWithRest("John", "Doe", "1st St", "Manchester", "M2");

// IMPORTANT: rest operator must be at end of parameter list

// SPREAD OPERATOR
// allows you to copy objects properly with no reference between them

// Deep and shallow copies

const numbers = [0, 1, 2, 3];
const copyOfNumbers = numbers;

console.log(`numbers: ${numbers}, copyOfNumbers: ${copyOfNumbers}`);

numbers.push(4);
copyOfNumbers[0] = 99;
console.log(`numbers: ${numbers}, copyOfNumbers: ${copyOfNumbers}`);
// changing either changes the other

// copy with spread operator
const spreadCopyOfNumbers = [...numbers];
console.log(`numbers: ${numbers}, spreadCopyOfNumbers: ${spreadCopyOfNumbers}`);

// they can now be changed independently
spreadCopyOfNumbers[0] = 0;
copyOfNumbers.push(99);
console.log(`numbers: ${numbers}, spreadCopyOfNumbers: ${spreadCopyOfNumbers}`);

// With objects:
// the same with curly braces

// If there is a nested object, that is still changed by the copy
// i.e., this is only a shallow copy

// to deep copy an object, you can do JSON.stringify() followed by JSON.parse()
// (assigning to a new variable)
