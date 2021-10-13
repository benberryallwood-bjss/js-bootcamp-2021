const stringExpression = (inputString) => {
  const nums = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // Turn into array of words
  const inputArr = [
    ...inputString.match(
      /zero|one|two|three|four|five|six|seven|eight|nine|plus|minus/g
    ),
  ];

  // Turn into array of numbers and + and -
  let sumArr = inputArr
    .map((item) => {
      switch (item) {
        case "plus":
          return "+";
        case "minus":
          return "-";
        default:
          return nums.indexOf(item);
      }
    })
    .join("")
    .match(/\d+|\+|-/g);

  // Start with first number
  let result = +sumArr[0];

  // Complete the sum going through array
  for (let i = 1; i < sumArr.length; i++) {
    if (sumArr[i - 1] === "+") {
      result += +sumArr[i];
    } else if (sumArr[i - 1] === "-") {
      result -= +sumArr[i];
    }
  }

  // Split result into array individual digits (and possible -)
  const outputArr = result.toString().split("");

  // Change to array of words and join again
  return outputArr
    .map((item) => {
      switch (item) {
        case "-":
          return "negative";
        default:
          return nums[item];
      }
    })
    .join("");
};

console.log(stringExpression("onezeropluseight"));
console.log(stringExpression("oneminusoneone"));
