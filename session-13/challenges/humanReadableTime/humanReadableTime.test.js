import { humanReadableTime } from "./humanReadableTime";

describe("humanReadableTime", () => {
  it("Should return 00:00:00 when given input of 0", () => {
    expect(humanReadableTime(0)).toBe("00:00:00");
  });

  it("Should return 00:00:SS for input less than 60", () => {
    expect(humanReadableTime(52)).toBe("00:00:52");
  });

  it("Should return 01:20:30 for input of 4830", () => {
    expect(humanReadableTime(4830)).toBe("01:20:30");
  });
});
