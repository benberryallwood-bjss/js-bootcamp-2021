console.log("Running golf challenge");

const names = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];
const par = 6;
const strokes = 3;

switch (strokes) {
  case 1:
    console.log(names[0]);
    break;
  case strokes <= par - 2 ? strokes : null: // a bit weird
    console.log(names[1]);
    break;
  case par - 1:
    console.log(names[2]);
    break;
  case par:
    console.log(names[3]);
    break;
  case par + 1:
    console.log(names[4]);
    break;
  case par + 2:
    console.log(names[5]);
    break;
  default:
    console.log(names[6]);
}

// if (strokes === 1) {
//   console.log(names[0]);
// } else if (strokes <= par - 2) {
//   console.log(names[1]);
// } else if (strokes === par - 1) {
//   console.log(names[2]);
// } else if (strokes === par) {
//   console.log(names[3]);
// } else if (strokes === par + 1) {
//   console.log(names[4]);
// } else if (strokes === par + 2) {
//   console.log(names[5]);
// } else {
//   console.log(names[6]);
// }
