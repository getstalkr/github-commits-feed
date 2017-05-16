import * as chai from "chai";
import { Pusher as PusherCredentials } from "../../src/Models/Credentials";

const expect = chai.expect;

describe("Models:Credentials", () => {

  it("constructor() builds all properties", () => {

    const expected = {
      appId: "123456",
      key: "4JEUi0C2UT49m872Euc5",
      secret: "Bzx2MlrMbNtBpZv391J1",
      encrypted: true,
    };

    const result = new PusherCredentials(
      expected.appId,
      expected.key,
      expected.secret,
      expected.encrypted,
    );

    expect(result).to.have.property("appId", expected.appId);
    expect(result).to.have.property("key", expected.key);
    expect(result).to.have.property("secret", expected.secret);
    expect(result).to.have.property("encrypted", expected.encrypted);

  });

});
