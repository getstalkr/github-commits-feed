"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const PusherInstance = require("pusher");
const Credentials_1 = require("./../Models/Credentials");
class PusherClient {
    constructor() {
        this.credentials = new Credentials_1.Pusher(process.env.PUSHER_ID, process.env.PUSHER_KEY, process.env.PUSHER_SECRET, true);
        this.channel = `${process.env.STALKR_PROJECT}@${process.env.STALKR_TEAM}`;
        this.client = new PusherInstance(this.credentials);
    }
    publish(payload) {
        return new Promise((resolve, reject) => {
            this.handleNewEvent(payload)
                .then((details) => {
                resolve(details);
            })
                .catch((err) => {
                return reject(this.handleError(err));
            });
        });
    }
    handleNewEvent(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.client.trigger(this.channel, "push", payload, null, (err, req, res) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(payload);
                });
            });
        });
    }
    handleError(error) {
        return error.message;
    }
}
exports.PusherClient = PusherClient;
//# sourceMappingURL=Pusher.js.map