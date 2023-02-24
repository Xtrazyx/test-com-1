export async function getAllPlayers() {
    const ALL_PLAYERS_URL = 'http://localhost:3000/players';

    try {
        const response = await fetch(ALL_PLAYERS_URL, { method: 'GET' });
        console.log(response)
        return response;
    } catch {
        throw new Error('Not found')
    }
}
