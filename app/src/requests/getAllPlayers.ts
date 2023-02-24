export async function getAllPlayers() {
    const domain = process.env.DOMAIN || 'localhost';

    const ALL_PLAYERS_URL = `http://${domain}/players`;

    try {
        const response = await fetch(ALL_PLAYERS_URL, { method: 'GET' });
        console.log(response)
        return response;
    } catch {
        throw new Error('Not found')
    }
}
