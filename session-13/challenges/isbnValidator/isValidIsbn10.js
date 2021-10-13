export const isValidIsbn10 = (input) => {
  if (
    // Doesn't contain 10 numbers
    input.match(/\d/g).length !== 10 &&
    // And doesn't contain 9 numbers and an 'X' at the end
    (input.match(/\d/g).length !== 9 || !/X$/.test(input))
  ) {
    return false;
  }

  // Array of first 9 numbers
  const arr = input.match(/\d(?!$)/g);

  // Sum numbers multiplied by index (+1 because 0-based)
  const sumFirst9 = arr.reduce(
    (prev, curr, currIdx) => prev + +curr * (currIdx + 1),
    0
  );

  const lastChar = sumFirst9 % 11 === 10 ? "X" : (sumFirst9 % 11).toString();

  return input[input.length - 1] === lastChar;
};
