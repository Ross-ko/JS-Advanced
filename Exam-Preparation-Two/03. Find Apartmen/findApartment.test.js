import { expect } from "chai";
import { findNewApartment } from "./findApartment.js";

describe("Test suite", function () {
  describe("isGoodLocation tests", () => {
    it("Invalid input1!", () => {
      expect(() => findNewApartment.isGoodLocation(9, "Karabunar")).to.throw();
    });
    it("Invalid input2!", () => {
      expect(() => findNewApartment.isGoodLocation("9", "Simitli")).to.throw();
    });
    it("Invalid input3!", () => {
      expect(() => findNewApartment.isGoodLocation(9, true)).to.throw();
    });
    it("Difrent city", () => {
      expect(findNewApartment.isGoodLocation("Lulin", true)).to.equal(
        "This location is not suitable for you."
      );
    });
    it("boolean = false", () => {
      expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal(
        "There is no public transport in area."
      );
    });
    it("Met conditions", () => {
      expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal(
        "You can go on home tour!"
      );
    });
  });

  describe("isLargeEnough tests", () => {
    it("Invalid input!", () => {
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw();
    });
    it("Invalid input!", () => {
      expect(() => findNewApartment.isLargeEnough([], "string")).to.throw();
    });
    it("Invalid input!", () => {
      expect(() => findNewApartment.isLargeEnough("string", 50)).to.throw();
    });
    it("Invalid input!", () => {
      expect(() =>
        findNewApartment.isLargeEnough([40, 50, 60], "string")
      ).to.throw();
    });
    it("Invalid input!", () => {
      expect(() =>
        findNewApartment.isLargeEnough("string", "string")
      ).to.throw();
    });
    it("Invalid input!", () => {
      expect(() => findNewApartment.isLargeEnough(["string"], "60")).to.throw();
    });

    let resultArr = [80, 90, 100];

    it("Return apartments array1", () => {
      expect(
        findNewApartment.isLargeEnough([60, 70, 80, 90, 100], 75)
      ).to.equal(resultArr.join(", "));
    });
    it("Return apartments array2", () => {
      expect(
        findNewApartment.isLargeEnough([60, 70, 80, 90, 100], 80)
      ).to.equal(resultArr.join(", "));
    });
    it("Return apartments array3", () => {
      expect(
        findNewApartment.isLargeEnough([60, 70, 80, 90, 100], 200)
      ).to.equal("");
    });
  });

  describe("isItAffordable tests", () => {
    it("Invalid input1!", () => {
      expect(() =>
        findNewApartment.isItAffordable("200000", 195000)
      ).to.throw();
    });
    it("Invalid input2!", () => {
      expect(() =>
        findNewApartment.isItAffordable(200000, "195000")
      ).to.throw();
    });
    it("Invalid input3!", () => {
      expect(() => findNewApartment.isItAffordable(0, "195000")).to.throw();
    });
    it("Invalid input4!", () => {
      expect(() => findNewApartment.isItAffordable(200000, -400000)).to.throw();
    });
    it("Invalid input5!", () => {
      expect(() =>
        findNewApartment.isItAffordable("200000", "-400000")
      ).to.throw();
    });
    it("Not enough money", () => {
      expect(findNewApartment.isItAffordable(200000, 195000)).to.equal(
        "You don't have enough money for this house!"
      );
    });
    it("New Home", () => {
      expect(findNewApartment.isItAffordable(300000, 1950000)).to.equal(
        "You can afford this home!"
      );
    });
  });
});
