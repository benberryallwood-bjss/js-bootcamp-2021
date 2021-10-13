const loneSum = (...nums) => {
  let result = 0;

  for (const elem of nums) {
    if (nums.filter((num) => num === elem).length === 1) {
      result += elem;
    }
  }

  return result;
};

console.log(loneSum(1, 2, 3));
