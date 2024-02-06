import { assert } from "chai";
import { lookupChar } from "../charLookUp.js";

describe("lookupChar", () => {
  it("return undefined", () => {
    assert.isUndefined(lookupChar(9, 9));
    assert.isUndefined(lookupChar("9", "9"));
    assert.isUndefined(lookupChar("9", 9.9));
  });
  it("return incorrect index", () => {
    assert.equal(lookupChar("9", 9), "Incorrect index");
    assert.equal(lookupChar("9", -9), "Incorrect index");
  });
  it("return char", () => {
    assert.equal(lookupChar("9", 0), "9");
    assert.equal(lookupChar("963", 1), "6");
  });
});
