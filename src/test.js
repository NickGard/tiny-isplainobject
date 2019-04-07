const { isPlainObject } = require("./index");
const { expect } = require("chai");

describe("isPlainObject", () => {
  it("returns true for plain objects", () => {
    [{}, { a: 1 }, Object.create(null)].forEach(obj => {
      expect(isPlainObject(obj)).to.be.true;
    });
  });
  it("returns false for non-objects and fancy objects", () => {
    function Foo() {}
    [
      null,
      undefined,
      true,
      false,
      "",
      "foo",
      [],
      [1, 2, 3],
      new Foo(),
      new Set()
    ].forEach(obj => {
      expect(isPlainObject(obj)).to.be.false;
    });
  });
});
