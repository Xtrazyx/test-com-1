"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerById = void 0;
function getPlayerById(id, players) {
    const player = players.find((target) => target.id === id);
    if (player) {
        return player;
    }
    throw new Error('Not Found');
}
exports.getPlayerById = getPlayerById;
//# sourceMappingURL=getPlayerById.js.map