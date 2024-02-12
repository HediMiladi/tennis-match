import { Player, PlayersResponse } from "../types/Player";
import { sortPlayers } from "../utils/utilityFunctions";
import { http } from "../utils/http";

const allTennisPlayersUrl =
  "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

const getTennisPlayers = async (): Promise<Player[]> => {
  const playersResponse = await http<PlayersResponse>(allTennisPlayersUrl);
  const sortedPlayers = sortPlayers(playersResponse.players);
  return sortedPlayers;
};

const getTennisPlayerById = async (
  id: number,
  navigateToError: () => any
): Promise<Player | undefined> => {
  const player = await getTennisPlayers().then((players) =>
    players.find((x) => x.id === id)
  );

  if (player === undefined) {
    navigateToError();
  }

  return player;
};

export const playerService = {
  getTennisPlayers,
  getTennisPlayerById,
};
