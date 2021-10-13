const blueTicket = (a, b, c) => {
  let result = 0;

  if (a + b === 10 || a + c === 10 || b + c === 10) {
    result = 10;
  } else if (a === c + 10 || b === c + 10) {
    return 5;
  }

  return result;
};
