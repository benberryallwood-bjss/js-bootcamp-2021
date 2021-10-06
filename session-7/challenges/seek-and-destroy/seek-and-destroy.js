// Remove from the array whatever is in the following arguments
// Return the leftover values in an array
const seekAndDestroy = (arr, ...toDelete) => {
  // By creating a new array:
  const output = [];

  for (const elem of arr) {
    if (!toDelete.includes(elem)) {
      output.push(elem);
    }
  }

  return output;

  // To edit the given array:
  /*for (const elem of arr) {
    if (toDelete.includes(elem)) {
      arr.splice(arr.indexOf(elem), 1);
    }
  }

  return arr;*/
};

console.log(seekAndDestroy([1, 2, 3, 4], 2, 4));
console.log(seekAndDestroy([2, 3, 4, "test"], 2, "test", 6, 7, 8));
