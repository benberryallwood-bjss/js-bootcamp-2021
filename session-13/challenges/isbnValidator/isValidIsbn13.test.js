import { isValidIsbn13 } from "./isValidIsbn13";

describe("ISBN 13 validator", () => {
  it.each([
    ["98755867-42398578", false],
    ["12353246k", false],
    ["823475 2984 7", false],
  ])(
    "Should return false if input is not 13 characters (with optional spaces and dashes)",
    (input, expected) => {
      expect(isValidIsbn13(input)).toBe(expected);
    }
  );

  it.each([
    ["9780470059029", true],
    ["978 0 471 48648 0", true],
    ["978-0596809485", true],
    ["978-0-13-149505-0", true],
    ["978-0-262-13472-9", true],
  ])("Should return true for %s", (input, expected) => {
    expect(isValidIsbn13(input)).toBe(expected);
  });

  it.each([
    ["9780470059022", false],
    ["978 0 471 48648 4", false],
    ["978-0596809489", false],
    ["978-0-13-149505-6", false],
    ["978-0-262-13472-7", false],
  ])("Should return false for %s", (input, expected) => {
    expect(isValidIsbn13(input)).toBe(expected);
  });
});
