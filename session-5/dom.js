console.log("Running dom.js...");

// console.log(document);

// SELECTORS:
const headingElement = document.getElementById("heading");
// console.log(headingElement);

// Changing inner HTML
headingElement.innerHTML = "New Heading";

const paragraph = document.querySelector(".paragraph");
console.log(paragraph.innerText);

// Here .querySelector would just select the first .item element
// This creates array of all elements of class .item
const listItems = document.querySelectorAll(".item");
listItems.forEach((item) => {
  console.log(item.innerText);
});

// Select using a data attribute
const img = document.querySelector("[data-custom-image-name]");
// console.log(img);

// Select by class name
const paragraphByClassName = document.getElementsByClassName("paragraph");
// console.log(paragraphByClassName);

// --------------- EVENT HANDLING ---------------
const headingListener = () => {
  console.log("Clicked heading");
};

const paraHover = () => {
  console.log("Hovered over paragraph");
};

const numberList = document.querySelector(".number-list");
const listAdderBtn = document.getElementById("listAdderBtn");

listAdderBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.innerHTML = Math.floor(Math.random() * 5);
  numberList.appendChild(listItem); // adds elements as child of <ul>
});

const commentBox = document.getElementById("comments");

// function declaration for 'this'
function validateComments(event) {
  const currentInput = event.target.value;

  if (/\d/.test(currentInput)) {
    console.log("Stop typing numbers");
    // commentBox.classList.add("error") - add .error class (need CSS)
  }
}

commentBox.addEventListener("keyup", validateComments);
