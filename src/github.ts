export async function fetchGithubActivity(username: String) {
    const url = `https://api.github.com/users/${username}/events`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Github API Error: ${response.statusText}`);
        }
        const events = await response.json();
        return events.slice(0, 5);

    } catch (error : any) {
        throw new Error(`Failed to fetch data: ${error.message}`)
    }
}