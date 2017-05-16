export class Commit {

    private sha: string;
    private branch: string;
    private message: string;
    private date: Date;

    constructor(sha: string, branch: string, message: string, date: Date) {
        this.sha = sha;
        this.branch = branch;
        this.message = message;
        this.date = date;
    }

}
