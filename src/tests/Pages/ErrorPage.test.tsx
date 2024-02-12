import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routesConfig } from "../../routesConfig";

describe("ErrorPage Component", () => {
  test("renders 404 error message when no error message is provided", () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/404"],
    });

    render(<RouterProvider router={router} />);
    const errorMessageElement = screen.getByText(
      /Oops! The page you are looking for could not be found./i
    );
    expect(errorMessageElement).toBeInTheDocument();
    const homeLinkElement = screen.getByRole("link", {
      name: /Go back to Home/i,
    });
    expect(homeLinkElement).toBeInTheDocument();
    expect(homeLinkElement).toHaveAttribute("href", "/"); // Ensure link goes back to home
  });
});
