import {
  formatAge,
  formatGender,
  formatHeight,
  formatWeight,
} from "../../utils/formatPlayerInformation";

describe("Formatting Functions", () => {
  test("formatWeight formats weight correctly", () => {
    expect(formatWeight(75000)).toBe("75 kg");
    expect(formatWeight(60000)).toBe("60 kg");
  });

  test("formatAge formats age correctly", () => {
    expect(formatAge(25)).toBe("25 years");
    expect(formatAge(38)).toBe("38 years");
  });

  test("formatHeight formats height correctly", () => {
    expect(formatHeight(180)).toBe("1m8");
    expect(formatHeight(175)).toBe("1m75");
  });

  test("formatGender formats gender correctly", () => {
    expect(formatGender("M")).toBe("Male");
    expect(formatGender("F")).toBe("Female");
  });
});
