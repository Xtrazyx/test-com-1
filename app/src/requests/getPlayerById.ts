export async function getPlayerById({ params }: { params: { id?: string }}) {
    const ALL_PLAYERS_URL = `http://localhost:3000/players/${params.id || ''}`;

    try {
        const response = await fetch(ALL_PLAYERS_URL, { method: 'GET' });
        console.log(response)
        return response;
    } catch {
        throw new Error('Not found')
    }
}
