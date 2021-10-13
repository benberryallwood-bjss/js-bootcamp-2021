const rowWeights = (arr) => {
  const result = [0, 0];

  arr.forEach((elem, idx) => {
    result[idx % 2] += elem;
  });

  return result;
};

console.log(rowWeights([13, 27, 49]));
