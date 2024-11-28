const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

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
	expect(body).to.equal("Welcome to the payment system");
	done();
  });
  });
});

describe("Cart page", () => {
  it("check correct status code for correct url", (done) => {
  request.get("http://localhost:7865/cart/12", (error, res, body) => {
	expect(res.statusCode).to.equal(200);
	done();
  });
  });
  it("check correct content for correct url", (done) => {
  request.get("http://localhost:7865/cart/12", (error, res, body) => {
	expect(body).to.contain("Payment methods for cart 12");
	done();
  });
  });
  it("check correct status code for incorrect url", (done) => {
  request.get("http://localhost:7865/cart/kim", (error, res, body) => {
	expect(res.statusCode).to.equal(404);
	done();
  });
  });
});
