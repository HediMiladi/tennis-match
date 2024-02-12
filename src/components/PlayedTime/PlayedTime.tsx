import { Clock } from "../../icons";

type PlayedTimeProps = {
  timeInHours: number;
};

export const PlayedTime = ({ timeInHours }: PlayedTimeProps) => {
  return (
    <div className="p-2 mt-2 text-center w-ful bg-black rounded">
      <span>
        <Clock color="white" />
      </span>
      <span className="text-gray-400">Total played time: </span>
      <span className="text-white font-bold" data-testid="time-value">
        {timeInHours} hours
      </span>
    </div>
  );
};
