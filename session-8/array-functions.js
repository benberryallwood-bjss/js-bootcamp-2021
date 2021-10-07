// Array Module

export const sumAllNumbers = (arr) => {
  let total = 0;

  arr.forEach((val) => {
    if (typeof val === "number") {
      total += val;
    }
  });

  return total;
};

export const existsInArr = (arr, val) => arr.some((element) => element === val);

export default function reverseArr(arr) {
  return arr.reverse();
}

// Only need this line if not exporting 'inline' when you make the function:
// export { sumAllNumbers };
