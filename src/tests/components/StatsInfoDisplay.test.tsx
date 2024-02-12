import { render, screen } from "@testing-library/react";
import { StatsInfoDisplay } from "../../components/StatsInfoDisplay/StatsInfoDisplay";

describe("StatsInfoDisplay Component", () => {
  const label = "Points";
  const value = 100;
  const renderComponent = () => {
    render(<StatsInfoDisplay label={label} value={value} />);
  };

  test("renders label and value correctly", () => {
    renderComponent();

    const labelElement = screen.getByText("Points:");
    const valueElement = screen.getByText("100");

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test("renders value with font-bold class", () => {
    renderComponent();

    const valueElement = screen.getByText("100");

    expect(valueElement).toHaveClass("font-bold");
  });
});
