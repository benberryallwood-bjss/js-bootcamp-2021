// console.log("Running main.js...");

// Conversion functions
import {
  celToFahr,
  fahrToCel,
  kelToFahr,
  fahrToKel,
  kelToCel,
  celToKel,
} from "./temp-conversion.js";

// DOM Selectors
const tempInput = document.getElementById("temp-input");
const startUnitInput = document.getElementById("start-unit-input");
const desiredUnitInput = document.getElementById("desired-unit-input");
const tempOutput = document.getElementById("temp-output");

// Function to determine what units to convert
// Returns function to be called
const getConverter = (startUnit, desiredUnit) => {
  let output;

  switch (startUnit) {
    case "cel":
      if (desiredUnit === "Fahr") {
        output = celToFahr;
      } else if (desiredUnit === "Kel") {
        output = celToKel;
      }
      break;
    case "fahr":
      if (desiredUnit === "Cel") {
        output = fahrToCel;
      } else if (desiredUnit === "Kel") {
        output = fahrToKel;
      }
      break;
    case "kel":
      if (desiredUnit === "Cel") {
        output = kelToCel;
      } else if (desiredUnit === "Fahr") {
        output = kelToFahr;
      }
      break;
  }

  if (startUnit === desiredUnit.toLowerCase()) {
    output = (startTemp) => startTemp;
  }

  return output;
};

// Input listener to run conversion for numbers
tempInput.addEventListener("keyup", (event) => {
  let temp = event.target.value;
  let startUnit = startUnitInput.value;
  let desiredUnit = desiredUnitInput.value;

  // Check if tempInput contains anything other than numbers
  if (/[^\d]/.test(temp)) {
    console.log("Must only enter numbers");
  } else {
  }

  temp = parseFloat(temp);

  console.log(temp);

  let converter = getConverter(startUnit, desiredUnit);

  tempOutput.innerText = converter(temp);
});

// Unit input listeners to run conversion when units changed
startUnitInput.addEventListener("change", (event) => {
  let temp = parseFloat(tempInput.value);
  let startUnit = event.target.value;
  let desiredUnit = desiredUnitInput.value;

  let converter = getConverter(startUnit, desiredUnit);

  tempOutput.innerText = converter(temp);
});
desiredUnitInput.addEventListener("change", (event) => {
  let temp = parseFloat(tempInput.value);
  let startUnit = startUnitInput.value;
  let desiredUnit = event.target.value;

  let converter = getConverter(startUnit, desiredUnit);

  tempOutput.innerText = converter(temp);
});
