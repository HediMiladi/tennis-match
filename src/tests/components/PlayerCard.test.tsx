import { render, screen } from "@testing-library/react";
import { PlayerCard } from "../../components/PlayerCard/PlayerCard";
import { Player } from "../../types/Player";

describe("PlayerCard Component", () => {
  test("renders player card correctly", () => {
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

    render(<PlayerCard player={player} />);

    const playerPictureElement = screen.getByAltText(player.shortname);
    const playerNameElement = screen.getByText(
      `${player.firstname} ${player.lastname}`
    );
    const playerCountryElement = screen.getByText("Country:");
    const playerCountryPicture = screen.getByAltText(player.country.code);

    expect(playerPictureElement).toBeInTheDocument();
    expect(playerNameElement).toBeInTheDocument();
    expect(playerCountryElement).toBeInTheDocument();
    expect(playerCountryPicture).toBeInTheDocument();
    expect(playerCountryPicture).toHaveAttribute("src", player.country.picture);
  });
});
