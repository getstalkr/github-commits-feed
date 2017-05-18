"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios_1 = require("axios");
class GithubClient {
    constructor() {
        this.config = {
            baseURL: "https://api.github.com",
            headers: {
                Authorization: `token ${process.env.GITHUB_TOKEN}`,
                accept: "application/vnd.github.v3+json",
            },
            method: "get",
        };
        this.client = axios_1.default.create(this.config);
    }
    getAvatarUrl(username) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.client.get(`users/${username}`);
                return this.handleResponse(response);
            }
            catch (e) {
                this.handleError(e);
            }
        });
    }
    handleResponse(response) {
        return response.data.avatar_url;
    }
    handleError(error) {
        (error.response)
            ? (console.log(error.response.data),
                console.log(error.response.status),
                console.log(error.response.headers))
            : console.log("Error: ", error.message);
    }
}
exports.GithubClient = GithubClient;
//# sourceMappingURL=Github.js.map