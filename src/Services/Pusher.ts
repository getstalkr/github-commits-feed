import { IncomingMessage, ServerResponse } from "http";
import * as PusherInstance from "pusher";
import { Pusher as PusherCredentials } from "./../Models/Credentials";
import { Event } from "./../Models/Event";

export class PusherClient {

  private credentials: PusherCredentials;
  private client: PusherInstance;
  private readonly channel: string;

  constructor() {
    this.credentials = new PusherCredentials(
      process.env.PUSHER_ID,
      process.env.PUSHER_KEY,
      process.env.PUSHER_SECRET,
      true,
    );
    this.channel = `${process.env.STALKR_PROJECT}@${process.env.STALKR_TEAM}`;
    this.client = new PusherInstance(this.credentials);
  }

  public publish(payload: Event): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.handleNewEvent(payload)
        .then((details) => {
          resolve(details);
        })
        .catch((err) => {
          return reject(this.handleError(err));
        });
    });
  }

  private async handleNewEvent(payload: Event): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.client.trigger(this.channel, "push", payload, null,
        (err: Error, req: IncomingMessage, res: ServerResponse) => {
          if (err) { return reject(err); }
          resolve(payload);
        },
      );
    });
  }

  private handleError(error: Error): string {
    return error.message;
  }

}
