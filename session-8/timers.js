console.log("Running timers.js...");

// Should put time into constant instead of using directly in setTimeout
const TIMER_SECONDS = 5000; // 5 seconds

const sayMessage = () => {
  console.log("Hello from sayMessage");
};

// Call function after specific time
setTimeout(sayMessage, TIMER_SECONDS);

// Repeat function
setInterval(() => {
  console.log("Hello from setInterval");
}, TIMER_SECONDS);

// Remove the interval:
const timer = setInterval(() => {
  console.log("Running every two seconds");
}, 2000);

// Remove the setInterval stored in timer
clearInterval(timer);
// setTimeout(() => {
//   clearInterval(timer);
// }, 6000);
