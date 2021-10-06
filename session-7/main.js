console.log("Session 7");

// const termMessage = document.getElementById("termMessage");
// const termInput = document.getElementById("termInput");

// termInput.addEventListener("keyup", (event) => {
//   const currentValueEntered = event.target.value;

//   if (/\d/.test(currentValueEntered)) {
//     termMessage.style.display = "block";
//   } else {
//     termMessage.style.display = "none";
//   }
// });

// window.addEventListener("load", () => {
//   termMessage.style.display = "none";
// });

// ----- PURE FUNCTIONS -----

// Pure function
const add = (num1, num2) => {
  const total = num1 + num2;

  return total;
};

// Not a pure function
const addNonPure = (num1, num2) => {
  const total = num1 + num2 + Math.random();

  return total;
};

// -----  -----
