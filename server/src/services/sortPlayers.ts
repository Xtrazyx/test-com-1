import { PlayerList } from "../types";

export function sortPlayersById(list: PlayerList): PlayerList {
    return list.sort((a, b) => Number(a.id) - Number(b.id))
}
