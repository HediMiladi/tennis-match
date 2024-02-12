import { playerService } from "../../services/playersService";

describe("Player Service", () => {
  const mockPlayersResponse = {
    players: [
      { id: 1, name: "Player 1" },
      { id: 2, name: "Player 2" },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockPlayersResponse),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getTennisPlayers retrieves and sorts players correctly", async () => {
    const players = await playerService.getTennisPlayers();
    expect(players).toEqual(mockPlayersResponse.players);
  });

  test("getTennisPlayerById retrieves player by id correctly", async () => {
    const playerId = 1;
    const player = await playerService.getTennisPlayerById(playerId, jest.fn());

    expect(player).toEqual(
      mockPlayersResponse.players.find((p) => p.id === playerId)
    );
  });

  test("getTennisPlayerById navigates to error when player is not found", async () => {
    const navigateToErrorMock = jest.fn();
    const nonExistentPlayerId = 999;
    await playerService.getTennisPlayerById(
      nonExistentPlayerId,
      navigateToErrorMock
    );

    expect(navigateToErrorMock).toHaveBeenCalled();
  });
});
