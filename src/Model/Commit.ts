export class Commit {

    sha: String;
    message: String;
    date: Date;

    constructor(sha: String, message: String, date: Date) {
        this.sha = sha;
        this.message = message;
        this.date = date;
    }

}
