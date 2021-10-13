import { blackJack } from "./blackJack";

describe("blackJack", () => {
  it("Should throw an error if any of two numbers is <=0", () => {
    expect(() => blackJack(-5, 0)).toThrow(
      "Both numbers must be greater than 0"
    );
  });

  it("Should return 0 if both numbers are over 21", () => {
    expect(blackJack(23, 99)).toBe(0);
    expect(blackJack(101, 72)).toBe(0);
  });

  it("Should return 19 if given (2, 19).", () => {
    expect(blackJack(2, 19)).toBe(19);
  });

  it("Should return 19 if given (19, 2).", () => {
    expect(blackJack(19, 2)).toBe(19);
  });

  it("Should return 20 if given (22, 20).", () => {
    expect(blackJack(22, 20)).toBe(20);
  });

  it("Should return 15 if given (15, 30).", () => {
    expect(blackJack(15, 30)).toBe(15);
  });

  it("Should return 21 if given (21, 21).", () => {
    expect(blackJack(21, 21)).toBe(21);
  });
});
