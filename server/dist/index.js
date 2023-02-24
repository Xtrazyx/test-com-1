"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const sortPlayers_1 = require("./services/sortPlayers");
const getPlayerById_1 = require("./services/getPlayerById");
const app = (0, express_1.default)();
// Put this in ENV variables
const PORT = 3000;
const PLAYER_LIST_URL = 'https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json';
app.use((0, cors_1.default)());
// GET /players
app.get("/players", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(PLAYER_LIST_URL);
        const sortedPlayers = (0, sortPlayers_1.sortPlayersById)(response.data.players);
        res.json(sortedPlayers);
    }
    catch (_a) {
        res.sendStatus(404);
    }
}));
// GET /players/<id>
app.get("/players/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(PLAYER_LIST_URL);
        const player = (0, getPlayerById_1.getPlayerById)(Number(req.params.id), response.data.players);
        res.json(player);
    }
    catch (_b) {
        res.sendStatus(404);
    }
}));
app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});
//# sourceMappingURL=index.js.map