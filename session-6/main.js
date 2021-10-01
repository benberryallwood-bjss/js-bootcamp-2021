console.log("Session 6");

// Callback functions
const people = ["Chris", "Ben", "John", "Lauren", "Phil"];

const looper = (arg) => {
  console.log(`Argument: ${arg}`);
};

people.forEach(looper);

// Fast food example
const makeDrink = (callback) => {
  setTimeout(() => {
    console.log("Making drink");
    callback();
  }, 3000);
};

const makeFries = () => {
  console.log("Making fries");
};

const makeBurger = () => {
  console.log("Making burger");
};

const orderMeal = () => {
  makeBurger();
  makeDrink(makeFries);
};

orderMeal();
