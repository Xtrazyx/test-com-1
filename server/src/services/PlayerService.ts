import axios from "axios";
import { sortPlayersById } from "../utils/sortPlayers";
import { getPlayerById } from "../utils/getPlayerById";

const PLAYER_LIST_URL =
  "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

export const PlayerService = {
  getAllSortById: async () => {
    try {
      const response = await axios.get(PLAYER_LIST_URL);

      return sortPlayersById(response.data.players);
    } catch {
      throw new Error("Not found");
    }
  },
  getPlayerById: async (id: string) => {
    try {
      const response = await axios.get(PLAYER_LIST_URL);

      return getPlayerById(Number(id), response.data.players);
    } catch {
      throw new Error("Not found");
    }
  },
};
