// Kata: String Calculator (TDD)
// Casio would like to introduce a Calculator program that takes a string and can perform the add operation on all numbers provided.
// Requirements are:

// 1. An empty string should return zero.
// 2. A single number returns the value.
// 3. Two numbers comma delimited returns the sum (2, 2 = 4).
// 4. Support multiple delimiters to separate the numbers between the numbers. Again the sum should still be returned. ~ | or ,
// Handle more than 2 numbers.
// 5. Passing negative numbers will be handled by producing an error.
// 6. Numbers bigger than 1000 should be ignored. So if passing 1001 + 2 then this should result in 2.

export const calculator = (input) => {
  // Throw error if negative numbers in input
  if (input.includes("-")) {
    throw new Error("Input must not contain negative numbers");
  }

  // Turn input into array, delimited by '~', ',' or '|'
  const arr = input.split(/[,~|]/);

  // Return sum of elements of array
  // +b turns b from string to number
  // 0 is the starting value, default would be ""
  return arr.reduce((a, b) => (+b > 1000 ? a : a + +b), 0);
};
