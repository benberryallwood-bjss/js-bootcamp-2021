const names = [
  "Karena",
  "Angelia",
  "Leone",
  "Brandon",
  "Judie",
  "Euna",
  "Harriett",
  "Sharan",
  "Forest",
  "Ingrid",
  "Johana",
  "Ben",
  "Peter",
  "Paul",
  "Noah",
  "Isidra",
  "Junko",
  "Sparkle",
  "Quentin",
  "Dorethea",
  "Delpha",
  "Desiree",
  "Val",
  "Lakeisha",
  "Charis",
  "Yahyah",
  "Rochell",
  "Iliana",
  "Neil",
  "Shelba",
  "Lala",
  "Vennie",
  "Tijuana",
  "Faustina",
  "Nadeen",
  "Shoshana",
  "Michael",
  "Oliver",
  "Oscar",
  "Adan",
  "Lucio",
  "Vernie",
  "Mandy",
  "Winston",
  "Zoe",
];
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

const renderNames = () => {
  const letters = alpha.split("");
  const ulElement = document.getElementById("namesList");

  letters.forEach((letter) => {
    const liHeader = document.createElement("li");
    liHeader.classList.add("collection-header");

    const liHeading = document.createElement("h5");
    liHeading.textContent = letter.toUpperCase();

    liHeader.appendChild(liHeading);

    ulElement.appendChild(liHeader);

    names
      .filter((name) => name.toUpperCase().startsWith(letter))
      .map((name) => {
        const liItem = document.createElement("li");
        liItem.classList.add("collection-item");

        const anchorForName = document.createElement("a");
        anchorForName.textContent = name;

        liItem.appendChild(anchorForName);

        ulElement.appendChild(liItem);
      });
  });
};

window.addEventListener("load", renderNames);

const filterNames = (currentInput) => {
  const listItems = document.querySelectorAll(".collection-item");
  let lowerCaseInput = currentInput.toLowerCase();

  for (const listItem of listItems) {
    let lowerCaseListItem = listItem.innerText.toLowerCase();

    if (lowerCaseListItem.includes(lowerCaseInput)) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  }
};

const filterInput = document.getElementById("filterInput");

// Run filterNames when input changes
filterInput.addEventListener("keyup", (event) => {
  filterNames(event.target.value);
});
