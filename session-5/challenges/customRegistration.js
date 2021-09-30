// Custom Registration

// Write a function that creates a custom car registration.

// Your function should:

// Replace 'A' with the number 4.
// Replace 'B' with the number 8.
// Replace 'S' with the number 5.
// Replace 'E' with the number 3.
// Any other number/letter is returned as the number itself

// So passing:

// MSSA SMK

// should yield: M554 5MK

// Caveats:

// The registration must be 8 in length (which includes one space)
// The first letter is to be ignored for conversion

// The function should return the outcome

// function customRegistration(registration)

console.log("Running customRegistration.js");

const defaultInput = "MSSA SMK";

// Function
const customRegistration = (input = defaultInput) => {
  // check requirements
  if (input.length !== 8 || input.includes(" ") === false) {
    return "Invalid input";
    // should throw new Error("description of error")
  }
  // Split into an array
  let arr = input.toUpperCase().split("");
  // Replace each char/num within array with switch statement whilst cycling array
  for (let i = 1; i < 8; i++) {
    switch (arr[i]) {
      case "A":
        arr[i] = 4;
        break;
      case "B":
        arr[i] = 8;
        break;
      case "S":
        arr[i] = 5;
        break;
      case "E":
        arr[i] = 3;
        break;
    }
  }
  // Join the split array
  return arr.join("");

  // But this changes the reference, so the orignal can't be used again?
  // arr is still an array but just within the function I think
  // the function returns a string which it builds from arr
  // Gotcha.

  // Split input into an array
  // for - traverse from second to last
  // string.charAt()?
};

console.log(customRegistration()); // M554 5MK
console.log(defaultInput); // MSSA SMK

// I was thinking about copying arrays, you have to loop through it to copy into another array. Might be the same in C++??
// haha
// I've done C++ but no C

// I think C++ takes the value normally when you invoke(?) a function
// So if you want to change the variable you have to pass by reference
// Which I think meant doing things like customRegistration(&"something")
// I don't quite remember though
// Me neither for C, haha - I'm right at the start really.
// haha fair enough

// FYI not sure how to leave
