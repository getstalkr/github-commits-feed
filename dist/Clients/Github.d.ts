export declare class GithubClient {
    private config;
    private client;
    constructor();
    getAvatarUrl(username: string): Promise<string>;
    private handleResponse(response);
    private handleError(error);
}
