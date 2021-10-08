export const validatePassword = (password) => {
  const hasValidLength = password.length >= 8;
  const containsLetter = /[a-z]/i.test(password);
  const containsNumber = /\d/.test(password);

  return hasValidLength && containsLetter && containsNumber;
};
