import express from "express";
import axios from "axios";
import cors from "cors";
import { sortPlayersById } from "./services/sortPlayers";
import { getPlayerById } from "./services/getPlayerById";

const app = express();

// Put this in ENV variables
const PORT = 3000;
const PLAYER_LIST_URL = 'https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json';

app.use(cors());

// GET /players
app.get("/players", async (req, res) => {
    try {
        const response = await axios.get(PLAYER_LIST_URL);

        const sortedPlayers = sortPlayersById(response.data.players);

        res.json(sortedPlayers);
    } catch {
        res.sendStatus(404);
    }
});

// GET /players/<id>
app.get("/players/:id", async (req, res) => {
    try {
        const response = await axios.get(PLAYER_LIST_URL);

        const player = getPlayerById(Number(req.params.id), response.data.players);

        res.json(player);
    } catch {
        res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});
