console.log("Running this-keyword.js...");

const myBtn = document.getElementById("myBtn");

// this means the button with function keyword
myBtn.addEventListener("click", function () {
  console.log(this);
});

myBtn2.addEventListener("click", () => {
  console.log(this);
});
