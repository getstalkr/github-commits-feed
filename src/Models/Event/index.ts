import { Commit, User } from "./Github";

export class Event {

    private author: User;
    private commit: Commit;

    constructor(from: User, content: Commit) {
        this.author = from;
        this.commit = content;
    }
}
