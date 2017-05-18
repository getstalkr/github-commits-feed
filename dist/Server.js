"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const micro_1 = require("micro");
const Github_1 = require("./Services/Github");
const Pusher_1 = require("./Services/Pusher");
const _1 = require("./Models/Event/");
const Github_2 = require("./Models/Event/Github");
class Server {
    constructor() {
        this.ghClient = new Github_1.GithubClient();
        this.pusherClient = new Pusher_1.PusherClient();
        this.server = micro_1.default((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { head_commit } = yield micro_1.json(req);
            const { id, tree_id, message, timestamp, committer } = head_commit;
            const { name, username } = committer;
            const avatarUrl = yield this.ghClient.getAvatarUrl(username);
            const event = new _1.Event(new Github_2.User(name, avatarUrl), new Github_2.Commit(id, tree_id, message, timestamp));
            this.pusherClient.publish(event)
                .then((details) => {
                micro_1.send(res, 200, { received: details });
            })
                .catch((err) => {
                micro_1.send(res, 500, { error: err });
            });
        }));
    }
    listen() {
        this.server.listen(process.env.PORT || Server.PORT, () => console.log("Listening..."));
    }
}
Server.PORT = 3000;
exports.Server = Server;
//# sourceMappingURL=Server.js.map