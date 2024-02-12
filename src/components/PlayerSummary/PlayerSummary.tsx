import { Link } from "react-router-dom";
import { Player } from "../../types/Player";
import { RightArrow } from "../../icons";
import {
  formatAge,
  formatHeight,
  formatWeight,
} from "../../utils/formatPlayerInformation";

import { PlayedTime } from "../PlayedTime/PlayedTime";
import { randomNumberInRange } from "../../utils/utilityFunctions";
import { StatsInfoDisplay } from "../StatsInfoDisplay/StatsInfoDisplay";

type PlayerProps = {
  player: Player;
};

export const PlayerSummary = ({ player }: PlayerProps) => {
  return (
    <div className="w-96 bg-white p-3 rounded text-center">
      <img
        src={player.picture}
        alt={player.shortname}
        className="w-20 h-20 mx-auto rounded-full"
      />
      <p className="font-bold text-xl text-gray-500">
        {player.firstname} {player.lastname}
      </p>
      <p className="font-bold">Rank: {player.data.rank}</p>

      <p className="text-left mt-2 font-bold text-sm">STATS</p>

      <div className="p-2 mt-2 text-left w-full bg-gray-100 rounded space-y-2">
        <StatsInfoDisplay label="Points" value={player.data.points} />
        <StatsInfoDisplay
          label="Height"
          value={formatHeight(player.data.height)}
        />
        <StatsInfoDisplay
          label="Weight"
          value={formatWeight(player.data.weight)}
        />
        <StatsInfoDisplay label="Age" value={formatAge(player.data.age)} />
      </div>
      <PlayedTime timeInHours={randomNumberInRange(150, 200)} />
      <div className="text-right mt-2 text-gray-500">
        <Link data-testid="player-details-link" to={`/player/${player.id}`}>
          See details <RightArrow />
        </Link>
      </div>
    </div>
  );
};
