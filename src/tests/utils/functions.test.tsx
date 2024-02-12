import { playersMock } from "../../mocks/playersMock";
import { sortedPlayersMock } from "../../mocks/sortedPlayersMock";
import { Player } from "../../types/Player";
import {
  getMultipleRandom,
  randomNumberInRange,
  sortPlayers,
} from "../../utils/utilityFunctions";

describe("Utility Functions", () => {
  describe("getMultipleRandom function", () => {
    test("returns an array of random elements from input array", () => {
      const inputArray = [1, 2, 3, 4, 5];
      const num = 3;

      const result = getMultipleRandom(inputArray, num);

      expect(Array.isArray(result)).toBe(true);

      expect(result).toHaveLength(num);

      result.forEach((item: number) => {
        expect(inputArray.includes(item)).toBe(true);
      });
    });
  });

  describe("sortPlayers function", () => {
    test("sorts players by their IDs", () => {
      const players: Player[] = playersMock;
      const sortedPlayers = sortPlayers(players);

      expect(sortedPlayers).toEqual(sortedPlayersMock);
    });
  });

  describe("randomNumberInRange function", () => {
    test("returns a random number within the specified range", () => {
      const min = 1;
      const max = 10;

      const result = randomNumberInRange(min, max);

      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});
