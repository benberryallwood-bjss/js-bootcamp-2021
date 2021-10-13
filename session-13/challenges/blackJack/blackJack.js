export const blackJack = (num1, num2) => {
  if (num1 <= 0 || num2 <= 0) {
    throw new Error("Both numbers must be greater than 0");
  }

  let result = num1 <= 21 ? num1 : 0;

  if (result < num2 && num2 <= 21) {
    result = num2;
  }

  return result;
};
