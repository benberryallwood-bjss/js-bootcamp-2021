import { isValidIsbn10 } from "./isValidIsbn10";

describe("ISBN 10 validator", () => {
  it.each([
    ["12345678901", false],
    ["934-234-2182-09", false],
    ["0 1234 233 342", false],
  ])(
    "Should return false if input is not 10 characters (with optional spaces and dashes)",
    (input, expected) => {
      expect(isValidIsbn10(input)).toBe(expected);
    }
  );

  it.each([
    ["048195869X", true],
    ["0 471 60695 2", true],
    ["0-470-84525-2", true],
    ["0-321-14653-0", true],
  ])("Should return true for %s", (input, expected) => {
    expect(isValidIsbn10(input)).toBe(expected);
  });

  it.each([
    ["0471958699", false],
    ["0 471 60695 0", false],
    ["0-470-84525-4", false],
    ["0-321-14653-7", false],
  ])("Should return false for %s", (input, expected) => {
    expect(isValidIsbn10(input)).toBe(expected);
  });
});
