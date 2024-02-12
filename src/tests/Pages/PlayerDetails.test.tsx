import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PlayerDetails } from "../../Pages/PlayerDetails/PlayerDetails";
import { playerService } from "../../services/playersService";
import { playersMock } from "../../mocks/playersMock";

jest.mock("../../services/playersService");

describe("PlayerDetails Component", () => {
  test("fetches and renders player details correctly", async () => {
    const player = playersMock[0];

    (playerService.getTennisPlayerById as jest.Mock).mockResolvedValue(player);

    render(<PlayerDetails />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText(/Novak Djokovic/i)).toBeInTheDocument();
    });
  });
});
