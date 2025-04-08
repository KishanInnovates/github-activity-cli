export function formatActivity(events: any[], filterType: string, limit: number): string {
    if (!events.length) return "No recent activity found."

    if (filterType) {
        events = events.filter(event => event.type.toLowerCase().includes(filterType.toLowerCase()));
    }

    events = events.slice(0, limit);
    
    return events.map((event) => {
        switch (event.type) {
            case "PushEvent":
                return `- Pushed ${event.payload.commits.length} commits to ${event.repo.name}`;
            case "IssuesEvent":
                return `- Opened a new issue in ${event.repo.name}`;
            case "WatchEvent":
                return `- Starred ${event.repo.name}`;
            default:
                return `- ${event.type} in ${event.repo.name}`;
        }
    }).join("\n");
}