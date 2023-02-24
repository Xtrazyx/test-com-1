import { Player, PlayerList } from "../types";

export function getPlayerById(id: number, players: PlayerList): Player {
    const player = players.find((target) => target.id === id);

    if(player) {
        return player;
    }

    throw new Error('Not Found');
}
