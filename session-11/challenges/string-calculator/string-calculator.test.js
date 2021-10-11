import { calculator } from "./string-calculator";

describe("String Calculator", () => {
  it("Should return 0 when given empty string", () => {
    const input = "";
    const expected = 0;

    expect(calculator(input)).toBe(expected);
  });

  it("Should return input when input is single number", () => {
    const input = "4";
    const expected = 4;

    expect(calculator(input)).toBe(expected);
  });

  it("Should return sum of numbers when given csv", () => {
    const input = "2,3,5";
    const expected = 10;

    expect(calculator(input)).toBe(expected);
  });

  it("Should return sum of numbers delimited by , | or ~", () => {
    const input = "2,9|10~4";
    const expected = 25;

    expect(calculator(input)).toBe(expected);
  });

  it("Should throw error when given a negative number", () => {
    const input = "2,9|-1";

    expect(() => calculator(input)).toThrow(
      "Input must not contain negative numbers"
    );
  });

  it("Should ignore numbers greater than 1000", () => {
    const input = "2,9|1001~4";
    const expected = 15;

    expect(calculator(input)).toBe(expected);
  });
});
