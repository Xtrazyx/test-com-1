"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPlayersById = void 0;
function sortPlayersById(list) {
    return list.sort((a, b) => Number(a.id) - Number(b.id));
}
exports.sortPlayersById = sortPlayersById;
//# sourceMappingURL=findAll.js.map