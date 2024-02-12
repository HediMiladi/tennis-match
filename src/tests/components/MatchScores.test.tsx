import { render, screen } from "@testing-library/react";
import { MatchScores } from "../../components/MatchScores/MatchScores";

describe("MatchScores Component", () => {
  test("renders label and icons correctly for given values", () => {
    const label = "Matches";
    const values = [1, 0, 1];

    render(<MatchScores label={label} values={values} />);

    expect(screen.getByText(label + ":")).toBeInTheDocument();

    const iconElements = screen.getAllByTestId("match-icon");

    expect(iconElements.length).toBe(values.length);

    values.forEach((value, index) => {
      expect(iconElements[index]).toHaveAttribute(
        "color",
        value === 0 ? "red" : "green"
      );
    });
  });
});
