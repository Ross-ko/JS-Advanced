import { assert } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("test not a number", () => {
      assert.isUndefined(mathEnforcer.addFive("9"));
    });
    it("test with number", () => {
      assert.equal(mathEnforcer.addFive(9), 14);
      assert.equal(mathEnforcer.addFive(-9), -4);
      assert.closeTo(mathEnforcer.addFive(-9.9), -4.9, 0.01);
    });
  });

  describe("subtractTen", () => {
    it("return undefined if not a number", () => {
      assert.isUndefined(mathEnforcer.subtractTen("9"));
    });
    it("subtract if its a number", () => {
      assert.equal(mathEnforcer.subtractTen(9), -1);
      assert.equal(mathEnforcer.subtractTen(-9), -19);
      assert.closeTo(mathEnforcer.subtractTen(-9.9), -19.9, 0.01);
    });
  });

  describe("sum", () => {
    it("return undefined if not a number", () => {
      assert.isUndefined(mathEnforcer.sum("9", 9));
      assert.isUndefined(mathEnforcer.sum(9, "9"));
      assert.isUndefined(mathEnforcer.sum("9", "9"));
    });
    it("return sum of two numbers", () => {
      assert.equal(mathEnforcer.sum(9, 19), 28);
      assert.equal(mathEnforcer.sum(-9, -19), -28);
      assert.closeTo(mathEnforcer.sum(9.9, 99.9), 109.8, 0.01);
    });
  });
});
