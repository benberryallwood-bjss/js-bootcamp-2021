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
      expect(() => celToFahr("")).toThrow();
      expect(() => celToFahr("0")).toThrow();
      expect(() => celToFahr(null)).toThrow();
      expect(() => celToFahr(undefined)).toThrow();
    });
  });

  describe("Output Validation", () => {
    it("should return the correct conversion", () => {
      expect(celToFahr(0)).toBeCloseTo(32);
      expect(celToFahr(20)).toBeCloseTo(68);
      expect(celToFahr(35)).toBeCloseTo(95);
    });
  });
});

describe("Fahrenheit to Celcius", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => fahrToCel("")).toThrow();
      expect(() => fahrToCel("0")).toThrow();
      expect(() => fahrToCel(null)).toThrow();
      expect(() => fahrToCel(undefined)).toThrow();
    });
  });

  describe("Output Validation", () => {
    it("should return the correct conversion", () => {
      expect(fahrToCel(32)).toBeCloseTo(0);
      expect(fahrToCel(68)).toBeCloseTo(20);
      expect(fahrToCel(95)).toBeCloseTo(35);
    });
  });
});

describe("Kelvin to Fahrenheit", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => kelToFahr("")).toThrow();
      expect(() => kelToFahr("0")).toThrow();
      expect(() => kelToFahr(null)).toThrow();
      expect(() => kelToFahr(undefined)).toThrow();
    });
  });

  describe("Output Validation", () => {
    it("Should give correct conversions", () => {});
  });
});

describe("Fahrenheit to Kelvin", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => fahrToKel("")).toThrow();
      expect(() => fahrToKel("0")).toThrow();
      expect(() => fahrToKel(null)).toThrow();
      expect(() => fahrToKel(undefined)).toThrow();
    });
  });
});

describe("Kelvin to Celcius", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => kelToCel("")).toThrow();
      expect(() => kelToCel("0")).toThrow();
      expect(() => kelToCel(null)).toThrow();
      expect(() => kelToCel(undefined)).toThrow();
    });
  });
});

describe("Celcius to Kelvin", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => celToKel("")).toThrow();
      expect(() => celToKel("0")).toThrow();
      expect(() => celToKel(null)).toThrow();
      expect(() => celToKel(undefined)).toThrow();
    });
  });
});
