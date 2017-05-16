import * as chai from "chai";
import { Event } from "../../src/Models/Event";
import { Commit, User } from "../../src/Models/Event/Github";

const expect = chai.expect;

describe("Models:Event", () => {

  it("constructor() builds all properties", () => {

    const expected = {
      author: {
        name: "baxterthehacker",
        avatarUrl: "https://avatars0.githubusercontent.com/u/6752317?v=3"
      },
      commit: {
        sha: "0d1a26e67d8f5eaf1f6ba5c57fc3c7d91ac0fd1c",
        branch: "f9d2a07e9488b91af2641b26b9407fe22a451433",
        message: "Update README.md",
        date: new Date(2015, 5, 5, 19, 40, 15, 4)
      }
    };

    const result = new Event(
      new User(expected.author.name, expected.author.avatarUrl),
      new Commit(expected.commit.sha, expected.commit.branch, expected.commit.message, expected.commit.date)
    );

    expect(result).to.have.deep.property("author.name", expected.author.name);
    expect(result).to.have.deep.property("author.avatarUrl", expected.author.avatarUrl);
    expect(result).to.have.deep.property("commit.sha", expected.commit.sha);
    expect(result).to.have.deep.property("commit.branch", expected.commit.branch);
    expect(result).to.have.deep.property("commit.message", expected.commit.message);
    expect(result).to.have.deep.property("commit.date", expected.commit.date);

  });

});
