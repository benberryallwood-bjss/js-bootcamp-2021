const sortByHeight = (arr) => {
  // The indices of the trees
  const indices = [];

  // Remove trees and record where they were
  // Looping backwards stops problems caused by reindexing with splice
  arr.reduceRight((_, curr, idx) => {
    if (curr === -1) {
      indices.push(idx);
      arr.splice(idx, 1);
    }
  }, null);

  // Sort both arrays
  // Indices only right if added in right order
  arr.sort((a, b) => a - b);
  indices.sort((a, b) => a - b);

  // Replace trees
  for (const idx of indices) {
    arr.splice(idx, 0, -1);
  }

  return arr;
};

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
