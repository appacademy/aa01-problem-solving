const chai = require("chai");
chai.use(require("chai-spies"));
const expect = chai.expect;
const charactersNotQuiteAtTheEdge = require("../problems/03-commenting-code");

describe("charactersNotQuiteAtTheEdge", function() {
  it('charactersNotQuiteAtTheEdge("fringe") returns "rg"', function () {
    expect(charactersNotQuiteAtTheEdge("fringe")).to.eq("rg");
  });
  it('charactersNotQuiteAtTheEdge("academy") returns "cm"', function () {
    expect(charactersNotQuiteAtTheEdge("academy")).to.eq("cm");
  });
});
