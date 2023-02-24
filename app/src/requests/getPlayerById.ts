export async function getPlayerById({ params }: { params: { id?: string }}) {
    const domain = import.meta.env.DOMAIN || 'test-com-1.herokuapp.com';

    const ALL_PLAYERS_URL = `https://${domain}/players/${params.id || ''}`;

    try {
        const response = await fetch(ALL_PLAYERS_URL, { method: 'GET' });
        console.log(response)
        return response;
    } catch {
        throw new Error('Not found')
    }
}
