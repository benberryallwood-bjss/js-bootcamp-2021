/*
 * Given the following UK phone number patterns, write a function 'isValidUkPhoneNumber(phoneNumber)' that validates them all (i.e. accepts them):
 * 07856766543
 * 0785 676 6543
 * +447856766543
 * +44 7856766543
 * (44) 7856766543
 *
 * You will need to pass each one to the function and ensure it returns true.
 * There is no need to add any edge case logic.
 */

const phoneNumbers = [
  "07856766543",
  "0785 676 6543",
  "+447856766543",
  "+44 7856766543",
  "(44) 7856766543",
];

const isValidPhoneNumber = (phoneNumber) => {
  const RE = /[\(44\) |\+44 ?|0]\d{3} ?\d{3} ?\d{4}/;

  return RE.test(phoneNumber);
};

for (const phoneNumber of phoneNumbers) {
  console.log(`${phoneNumber} returns ${isValidPhoneNumber(phoneNumber)}`);
}
