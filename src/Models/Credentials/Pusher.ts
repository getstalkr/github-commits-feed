export class Pusher {

    private appId: string;
    private key: string;
    private secret: string;
    private encrypted: boolean;

    constructor(appId: string, key: string, secret: string, encrypted: boolean) {
        this.appId = appId;
        this.key = key;
        this.secret = secret;
        this.encrypted = encrypted;
    }

}
