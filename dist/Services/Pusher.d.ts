import { Event } from "./../Models/Event";
export declare class PusherClient {
    private credentials;
    private client;
    private readonly channel;
    constructor();
    publish(payload: Event): Promise<object>;
    private handleNewEvent(payload);
    private handleError(error);
}
