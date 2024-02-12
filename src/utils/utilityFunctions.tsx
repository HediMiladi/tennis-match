import { Player } from "../types/Player";

export const getMultipleRandom = function (arr: any, num: number) {
  const unsortedArray = [...arr].sort(() => 0.5 - Math.random());

  return unsortedArray.slice(0, num);
};

export const sortPlayers = (players: Player[]): Player[] => {
  return players.sort((a, b) => a.id - b.id);
};

export const randomNumberInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
