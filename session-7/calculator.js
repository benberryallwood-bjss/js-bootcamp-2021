const add = (...nums) => {
  let total = 0;

  for (const num of nums) {
    total += num;
  }

  return total;
};

const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("You cannot divide by zero");
  }

  return num1 / num2;
};

const PI = 3.1415926;

module.exports = {
  add,
  divide,
  PI,
};
