import { Player } from "../../types/Player";
import {
  formatAge,
  formatHeight,
  formatGender,
  formatWeight,
} from "../../utils/formatPlayerInformation";
import { randomNumberInRange } from "../../utils/utilityFunctions";
import { DetailsInfoDisplay } from "../DetailsInfoDisplay/DetailsInfoDisplay";
import { MatchScores } from "../MatchScores/MatchScores";
import { PlayedTime } from "../PlayedTime/PlayedTime";

type PlayerProps = {
  player: Player;
};

export const PlayerCard = ({ player }: PlayerProps) => {
  return (
    <div
      data-testid="player-card"
      className="w-full md:w-96 bg-white p-5 rounded"
    >
      <img
        src={player.picture}
        alt={player.shortname}
        className="w-20 h-20 mx-auto rounded float-right m-3"
      />
      <h1 className="font-bold text-center text-2xl my-6">
        {player.firstname} {player.lastname}
      </h1>
      <div className="justify-start space-y-4">
        <p>
          Country:{" "}
          <img
            src={player.country.picture}
            alt={player.country.code}
            className="inline ml-3  w-12 h-8"
          />
        </p>
        <DetailsInfoDisplay label="Short Name" value={player.shortname} />
        <DetailsInfoDisplay label="Rank" value={player.data.rank} />
        <DetailsInfoDisplay label="Gender" value={formatGender(player.sex)} />
        <DetailsInfoDisplay label="Points" value={player.data.points} />
        <DetailsInfoDisplay
          label="Height"
          value={formatHeight(player.data.height)}
        />
        <DetailsInfoDisplay
          label="Weight"
          value={formatWeight(player.data.weight)}
        />
        <DetailsInfoDisplay label="Age" value={formatAge(player.data.age)} />
        <MatchScores label="Recent Matches" values={player.data.last} />
        <PlayedTime timeInHours={randomNumberInRange(150, 200)} />
      </div>
    </div>
  );
};
