import { Commit, User } from "./Github";
export declare class Event {
    private author;
    private commit;
    constructor(from: User, content: Commit);
}
