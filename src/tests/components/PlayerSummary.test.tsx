import { fireEvent, render, screen } from "@testing-library/react";
import { PlayerSummary } from "../../components/PlayerSummary/PlayerSummary";
import { Player } from "../../types/Player";
import { MemoryRouter } from "react-router-dom";

describe("PlayerSummary Component", () => {
  const player: Player = {
    id: 95,
    firstname: "Venus",
    lastname: "Williams",
    shortname: "V.WIL",
    sex: "F",
    country: {
      picture:
        "https://i.eurosport.com/_iss_/person/pp_clubteam/large/136449.jpg",
      code: "USA",
    },
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/136450.jpg",
    data: {
      rank: 52,
      points: 1105,
      weight: 74000,
      height: 185,
      age: 38,
      last: [0, 1, 0, 0, 1],
    },
  };

  const renderComponent = () => {
    return render(
      <MemoryRouter>
        <PlayerSummary player={player} />
      </MemoryRouter>
    );
  };

  test("renders player summary correctly", () => {
    renderComponent();

    const playerImage = screen.getByAltText(player.shortname);
    expect(playerImage).toBeInTheDocument();
    expect(playerImage).toHaveAttribute("src", player.picture);

    const playerName = screen.getByText(
      `${player.firstname} ${player.lastname}`
    );
    const playerRank = screen.getByText(`Rank: ${player.data.rank}`);
    const playerDetailsLinkElement = screen.getByTestId("player-details-link");
    const rightArrowIconElement = screen.getByTestId("right-arrow-icon");

    expect(playerRank).toBeInTheDocument();
    expect(playerName).toBeInTheDocument();
    expect(playerDetailsLinkElement).toBeInTheDocument();
    expect(playerDetailsLinkElement).toHaveAttribute(
      "href",
      `/player/${player.id}`
    );
    expect(rightArrowIconElement).toBeInTheDocument();
  });
});
