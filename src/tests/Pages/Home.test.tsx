import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";
import { playerService } from "../../services/playersService";
import { getMultipleRandom } from "../../utils/utilityFunctions";
import { playersMock } from "../../mocks/playersMock";

jest.mock("../../services/playersService");
jest.mock("../../utils/utilityFunctions");

describe("Home Component", () => {
  test("fetches players and renders them", async () => {
    const players = playersMock;

    (playerService.getTennisPlayers as jest.Mock).mockResolvedValue(players);
    (getMultipleRandom as jest.Mock).mockReturnValueOnce([
      players[0],
      players[1],
    ]);

    render(<Home />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(screen.getByText(/Novak Djokovic/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Venus Williams/i)).toBeInTheDocument();
    });
  });
});
