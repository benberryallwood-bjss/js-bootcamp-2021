export const addAllNumbers = (arr) => {
  let total = 0;

  arr.forEach((item) => {
    if (typeof item === "number") {
      total += item;
    }
  });

  return total;
};

export const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Can't divide by zero");
  }

  return num1 / num2;
};
