import { IncomingMessage, ServerResponse } from "http";
import micro, { json, send } from "micro";
import { GithubClient } from "./Services/Github";
import { PusherClient } from "./Services/Pusher";
import { Event } from "./Models/Event/";
import { Commit, User } from "./Models/Event/Github";

export class Server {

    public static readonly PORT = 3000;
    private ghClient: GithubClient;
    private pusherClient: PusherClient;
    private server: micro;

    constructor() {
      this.ghClient = new GithubClient();
      this.pusherClient = new PusherClient();
      this.server = micro(
        async (req, res) => {

          const { head_commit } = await json(req);

          const { id, tree_id, message, timestamp, committer } = head_commit;
          const { name, username } = committer;
          const avatarUrl = await this.ghClient.getAvatarUrl(username);

          const event = new Event(
            new User(name, avatarUrl),
            new Commit(id, tree_id, message, timestamp),
          );

          this.pusherClient.publish(event)
            .then((details) => {
              send(res, 200, { received: details });
            })
            .catch((err) => {
              send(res, 500, { error: err });
            });
        },
      );
    }

    public listen(): void {
      this.server.listen(process.env.PORT || Server.PORT, () => console.log("Listening..."));
    }
}
