import { User, Commit } from './Github'

export class Event {

    author: User;
    commit: Commit;

    constructor(from: User, content: Commit) {
        this.author = from;
        this.commit = content;
    }
}
