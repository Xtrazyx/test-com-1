import express from "express";
import cors from "cors";
import { PlayerService } from "./services/PlayerService";

const app = express();

// Put this in ENV variables
const PORT = 3000;

app.use(cors());

// GET /players
app.get("/players", async (req, res) => {
    try {
        const sortedPlayers = await PlayerService.getAllSortById();

        res.json(sortedPlayers);
    } catch {
        res.sendStatus(404);
    }
});

// GET /players/<id>
app.get("/players/:id", async (req, res) => {
    try {
        const player = await PlayerService.getPlayerById(req.params.id);

        res.json(player);
    } catch {
        res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`);
});
