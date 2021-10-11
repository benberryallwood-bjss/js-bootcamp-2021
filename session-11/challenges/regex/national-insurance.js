/*
 * In general a national insurance number has the following pattern:
 *
 * Two letters
 * hyphen
 * Two numbers
 * hyphen
 * Two numbers
 * A letter
 *
 * Write a function that checks if the value provided meets the above criteria. Return true when it does, false otherwise.
 */

const NINO = "AB-21-98L";

const isValidNINum = (NINO) => {
  const RE = /^[A-Z]{2}(-\d{2}){2}[A-Z]$/;

  return RE.test(NINO);
};

console.log(isValidNINum(NINO));
