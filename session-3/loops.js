// ----- LOOPS -----
console.log("----- LOOPS -----");

// ---- FOR LOOP ----
console.log("---- FOR LOOP ----");
for (let i = 0; i < 10; i++) {
  // console.log(`i: ${i}`);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i] * 2);
}

// ---- WHILE LOOPS ----
console.log("---- WHILE LOOPS ----");

let i = 0;
while (i < 10) {
  // console.log(i);
  i++;
}

// ---- FOR .. IN/OF ----
console.log("---- FOR .. IN/OF ----");

const films = ["Thriller", "Green Mile", "Saw"];
for (let i = 0; i < films.length; i++) {
  // console.log(films[i]);
}
for (let film of films) {
  // console.log(film);
}

// ---- ARRAY FUNCTION FOREACH ----
console.log("---- ARRAY FUNCTION FOREACH ----");

films.forEach((film, index) => {
  // console.log(index, film);
});

// Chaining high order functions
films
  .sort()
  .map((film) => film.toUpperCase())
  .forEach((filmAsUpper) => console.log(filmAsUpper));
