import {
  celToFahr,
  fahrToCel,
  kelToFahr,
  fahrToKel,
  kelToCel,
  celToKel,
} from "./temp-conversion";

describe("Celcius to Fahrenheit", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => celToFahr("")).toThrow("Input must be a number");
      expect(() => celToFahr("0")).toThrow("Input must be a number");
      expect(() => celToFahr(null)).toThrow("Input must be a number");
      expect(() => celToFahr(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [0, 32],
      [20, 68],
      [35, 95],
    ])("should convert %d to %d", (input, expected) => {
      expect(celToFahr(input)).toBeCloseTo(expected);
    });
  });
});

describe("Fahrenheit to Celcius", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => fahrToCel("")).toThrow("Input must be a number");
      expect(() => fahrToCel("0")).toThrow("Input must be a number");
      expect(() => fahrToCel(null)).toThrow("Input must be a number");
      expect(() => fahrToCel(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [32, 0],
      [68, 20],
      [95, 35],
    ])("should convert %d to %d", (input, expected) => {
      expect(fahrToCel(input)).toBeCloseTo(expected);
    });
  });
});

describe("Kelvin to Fahrenheit", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => kelToFahr("")).toThrow("Input must be a number");
      expect(() => kelToFahr("0")).toThrow("Input must be a number");
      expect(() => kelToFahr(null)).toThrow("Input must be a number");
      expect(() => kelToFahr(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [180, -135.67],
      [200, -99.67],
      [220, -63.67],
    ])("Should convert %d to %d", (input, expected) => {
      expect(kelToFahr(input)).toBeCloseTo(expected);
    });
  });
});

describe("Fahrenheit to Kelvin", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => fahrToKel("")).toThrow("Input must be a number");
      expect(() => fahrToKel("0")).toThrow("Input must be a number");
      expect(() => fahrToKel(null)).toThrow("Input must be a number");
      expect(() => fahrToKel(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [10, 260.93],
      [30, 272.04],
      [50, 283.15],
    ])("Should convert %d to %d", (input, expected) => {
      expect(fahrToKel(input)).toBeCloseTo(expected);
    });
  });
});

describe("Kelvin to Celcius", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => kelToCel("")).toThrow("Input must be a number");
      expect(() => kelToCel("0")).toThrow("Input must be a number");
      expect(() => kelToCel(null)).toThrow("Input must be a number");
      expect(() => kelToCel(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [0, -273.15],
      [60, -213.15],
      [140, -133.15],
    ])("Should convert %d to %d", (input, expected) => {
      expect(kelToCel(input)).toBeCloseTo(expected);
    });
  });
});

describe("Celcius to Kelvin", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => celToKel("")).toThrow("Input must be a number");
      expect(() => celToKel("0")).toThrow("Input must be a number");
      expect(() => celToKel(null)).toThrow("Input must be a number");
      expect(() => celToKel(undefined)).toThrow("Input must be a number");
    });
  });

  describe("Output Validation", () => {
    it.each([
      [0, 273.15],
      [60, 333.15],
      [140, 413.15],
    ])("Should convert %d to %d", (input, expected) => {
      expect(celToKel(input)).toBeCloseTo(expected);
    });
  });
});
