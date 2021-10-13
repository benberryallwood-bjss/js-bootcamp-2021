export const humanReadableTime = (input) => {
  if (input > 359999) {
    throw new Error("Input is too high");
  }

  let seconds = input;
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  // Each to string of length 2 (or more for hours)
  seconds = seconds.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
