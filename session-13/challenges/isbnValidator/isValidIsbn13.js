export const isValidIsbn13 = (input) => {
  if (
    // Doesn't contain 13 numbers
    input.match(/\d/g).length !== 13
  ) {
    return false;
  }

  // Array of first 12 numbers
  const arr = input.match(/\d(?!$)/g);

  // Sum numbers multiplied by 1 or 3, alternately
  const sumFirst12 = arr.reduce(
    (prev, curr, currIdx) => prev + +curr * (2 * (currIdx % 2) + 1),
    0
  );

  const lastChar = ((10 - (sumFirst12 % 10)) % 10).toString();

  return input[input.length - 1] === lastChar;
};
