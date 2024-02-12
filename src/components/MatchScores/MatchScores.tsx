import { CircleLost, CircleWin } from "../../icons";

type MatchScoresProps = {
  label: string;
  values: number[];
};

export const MatchScores = ({ label, values }: MatchScoresProps) => {
  return (
    <div className="flex">
      <span className="mr-3">{label}:</span>{" "}
      {values.map((x, index) =>
        x === 0 ? (
          <CircleLost color="red" key={`match${index}`} />
        ) : (
          <CircleWin color="green" key={`match${index}`} />
        )
      )}
    </div>
  );
};
