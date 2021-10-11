// Regular expressions

// By convention, use const
const messageRE = /helo/;
const message = "hello";

// Verify whether there is a match
// Returns boolean
if (messageRE.test(message)) {
  console.log(`This matched ${message}`);
}

const phrase = `
The fat cat ran down the street.
It was searching for a mouse to eat.
`;

// d flag gives index ranges
const atRE = /a(t)/dg;

// Returns matches one-by-one, repeat until returns null
console.log(atRE.exec(phrase));
console.log(atRE.exec(phrase));
console.log(atRE.exec(phrase));
console.log(atRE.exec(phrase));

// Returns all matches in array
console.log(phrase.match(atRE));

// Returns all matches in array with indices
console.log(...phrase.matchAll(atRE));
