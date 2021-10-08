import { addAllNumbers, divide } from "./Calculator";

describe("Calculator:", () => {
  it("Should add all numbers", () => {
    // AAA:
    // 1. Arrange (optional)
    const arr = [1, 2, 3];
    // 2. Act
    const result = addAllNumbers(arr);
    // 3. Assert
    expect(result).toBe(6);
  });

  it("Should divide two numbers", () => {
    const num1 = 10;
    const num2 = 2;

    const result = divide(num1, num2);
    expect(result).toBe(5);
  });
});

describe("Edge Cases:", () => {
  it("Should not add test when adding numbers", () => {
    const arr = [1, 2, 3, "hello", "5"];

    const result = addAllNumbers(arr);

    expect(result).toBe(6);
  });

  it("Should throw error when dividing by zero", () => {
    expect(() => divide(2, 0)).toThrow();
  });
});
