import { render, screen } from "@testing-library/react";
import { PlayedTime } from "../../components/PlayedTime/PlayedTime";

describe("PlayedTime Component", () => {
  test("renders played time correctly", () => {
    const timeInHours = 100;
    render(<PlayedTime timeInHours={timeInHours} />);

    const playedTimeLabel = screen.getByText("Total played time:");
    const clockIconElement = screen.getByTestId("clock-icon");
    const timeElement = screen.getByTestId("time-value");

    expect(playedTimeLabel).toBeInTheDocument();
    expect(clockIconElement).toBeInTheDocument();

    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveTextContent(`${timeInHours} hours`);
  });
});
