/*
 * Validate passwords to ensure that:
 * - They are at least 8 characters in length
 * - Contain at least one letter
 * - Contain at least one number
 */

import { validatePassword } from "./ValidatePassword";

describe("Validate Password", () => {
  it("Should return false when password is empty", () => {
    expect(validatePassword("")).toBe(false);
  });

  it("Should return true when length of password is at least 8", () => {
    const password = "1234567E";

    expect(validatePassword(password)).toBe(true);
  });

  it("Should return false when only numbers in password", () => {
    const password = "12345678";

    expect(validatePassword(password)).toBe(false);
  });

  it("Should return false when only letters in password", () => {
    const password = "abcdefgh";

    expect(validatePassword(password)).toBe(false);
  });

  it("Should return false when length is less than 8", () => {
    const password = "abc4567";

    expect(validatePassword(password)).toBe(false);
  });
});
