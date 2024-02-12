import { Player } from "../../types/Player";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { playerService } from "../../services/playersService";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";
import { HomeIcon } from "../../icons";
import { MainLayout } from "../../layouts/MainLayout";

export const PlayerDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    playerService
      .getTennisPlayerById(Number(id), () => {
        navigate("/error", {
          state: {
            errorMessage: "Player not found",
          },
        });
      })
      .then((player) => setPlayer(player));
  }, [id, navigate]);

  return (
    <>
      {player && (
        <MainLayout>
          <div className="text-left m-6 text-gray-500">
            <Link to="/">
              <HomeIcon />
              Return to home
            </Link>
          </div>
          <div className="flex items-center justify-center p-2">
            <PlayerCard player={player} />
          </div>
        </MainLayout>
      )}
    </>
  );
};
