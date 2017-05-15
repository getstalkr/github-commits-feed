export declare class Server {
    static readonly PORT: number;
    private ghClient;
    private pusherClient;
    private server;
    constructor();
    listen(): void;
}
