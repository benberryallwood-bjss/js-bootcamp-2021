/* ----- CHALLENGE -----
 * Iterate from 1 to 500 inclusive and sum up numbers which are divisible by
 * only 3 or 5. Also print these numbers to the screen as well as the total
 * at the end
 */
console.log("Running challenges/divisibleBy.js");

let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 3 === 0) {
    sum += i;
    console.log(i);
  } else if (i % 5 === 0) {
    sum += i;
    console.log(i);
  }
}

// better
// if (i % 3 === 0 || i % 5 === 0) {}

console.log(`Total: ${sum}`);
