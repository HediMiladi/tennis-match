import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter to provide a router context
import { MainLayout } from "../../layouts/MainLayout";

describe("MainLayout Component", () => {
  test('renders children and "EuroStat" link correctly', () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <div>Test Children</div>
        </MainLayout>
      </MemoryRouter>
    );

    // Verify that "EuroStat" link is rendered correctly
    const linkElement = screen.getByRole("link", { name: /EuroStat/i });
    expect(linkElement).toBeInTheDocument();

    // Verify that children are rendered correctly
    const childrenElement = screen.getByText("Test Children");
    expect(childrenElement).toBeInTheDocument();
  });
});
