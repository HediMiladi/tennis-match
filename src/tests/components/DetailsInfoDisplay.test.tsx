import React from "react";
import { render, screen } from "@testing-library/react";
import { DetailsInfoDisplay } from "../../components/DetailsInfoDisplay/DetailsInfoDisplay";

describe("DetailsInfoDisplay Component", () => {
  test("renders label and value correctly", () => {
    const label = "Age";
    const value = 25;

    render(<DetailsInfoDisplay label={label} value={value} />);
    expect(screen.getByText(`${label}:`)).toBeInTheDocument();
    expect(screen.getByText(`${value}`)).toBeInTheDocument();
  });
});
