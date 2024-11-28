const request = require("request");
const expect = require("chai").expect;
const {describe, it} = require("mocha");

describe("Index page", () => {
  const options = {
  url: "http://localhost:7865/",
  method: "GET"
  }
  it("check correct status code", (done) => {
    request(options, (error, res, body) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
  });
  it("check correct content", (done) => {
    request(options, (error, res, body) => {
    expect(body).to.contain("Welcome to the payment system");
    done();
  });
  });
  it("check correct content length", (done) => {
    request(options, (error, res, body) => {
    expect(res.headers['content-length']).to.equal('29');
    done();
  });
  });
});
