import * as PusherInstance from "pusher";
import { Pusher as PusherCredentials } from "./../Model/Credentials";
import { Event } from "./../Model/Event";

export class PusherClient {

  private credentials: PusherCredentials;
  private client: PusherInstance;

  constructor() {
    this.credentials = new PusherCredentials(
      process.env.PUSHER_ID,
      process.env.PUSHER_KEY,
      process.env.PUSHER_SECRET,
      true,
    );
    this.client = new PusherInstance(this.credentials);
  }

  public publish(channelIdentifier: string, eventIdentifier: string, payload: Event): void {
    this.client.trigger(channelIdentifier, eventIdentifier, payload);
  }

}
