import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import { PlayerSummary } from "../../components/PlayerSummary/PlayerSummary";
import { playerService } from "../../services/playersService";
import { MainLayout } from "../../layouts/MainLayout";
import { getMultipleRandom } from "../../utils/utilityFunctions";

export const Home = () => {
  const [firstPlayer, setFirstPlayer] = useState<Player>();
  const [secondPlayer, setSecondPlayer] = useState<Player>();

  useEffect(() => {
    playerService.getTennisPlayers().then((players) => {
      const unsortedRandomPlayers = getMultipleRandom(players, 2);
      setFirstPlayer(unsortedRandomPlayers[0]);
      setSecondPlayer(unsortedRandomPlayers[1]);
    });
  }, []);

  return (
    <>
      {firstPlayer && secondPlayer && (
        <MainLayout>
          <div className="flex-none hidden md:block font-bold text-center my-5 text-xl md:mb-12">
            VS
          </div>
          <div className="md:flex items-baseline mt-10">
            <div className="md:relative md:grow flex items-center justify-center">
              <PlayerSummary player={firstPlayer} />
            </div>
            <div className="flex-none block md:hidden font-bold text-center my-5 text-xl md:mb-12">
              VS
            </div>
            <div className="md:relative md:grow flex items-center justify-center">
              <PlayerSummary player={secondPlayer} />
            </div>
          </div>
        </MainLayout>
      )}
    </>
  );
};
