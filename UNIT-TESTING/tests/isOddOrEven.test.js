import { assert } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

describe("isOddOrEven", () => {
  it("test non string value", () => {
    assert.equal(
      isOddOrEven({ prop: "Test" }),
      undefined,
      "return type must be undefined"
    );
    assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
    assert.isNotOk(isOddOrEven([]), "return type must be undefined");
  });

  it("test string value", () => {
    assert.equal(isOddOrEven("Test"), "even", "result is correct (even)");
    assert.equal(isOddOrEven("Testing"), "odd", "result is correct (odd)");
  });
});
