import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe("Test suite", function () {
  describe("licenseRestriction test", () => {
    it("return correct output for AM", () => {
      expect(motorcycleRider.licenseRestriction("AM")).to.equal(
        "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16."
      );
    });
    it("return correct output for A1", () => {
      expect(motorcycleRider.licenseRestriction("A1")).to.equal(
        "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16."
      );
    });
    it("return correct output for A2", () => {
      expect(motorcycleRider.licenseRestriction("A2")).to.equal(
        "Motorcycles with maximum power of 35KW. and the minimum age is 18."
      );
    });
    it("return correct output for A", () => {
      expect(motorcycleRider.licenseRestriction("A")).to.equal(
        "No motorcycle restrictions, and the minimum age is 24."
      );
    });
    it("throw error for invalid input string", () => {
      expect(() => motorcycleRider.licenseRestriction("R")).to.throw();
    });
    it("throw error for invalid input number", () => {
      expect(() => motorcycleRider.licenseRestriction(9)).to.throw();
    });
  });

  describe("motorcycleShowroom test", () => {
    it("returns one element from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50"], 50)).to.equal(
        "There are 1 available motorcycles matching your criteria!"
      );
    });
    it("returns only matching elements from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50", "55"], 50)).to.equal(
        "There are 1 available motorcycles matching your criteria!"
      );
    });
    it("returns two element from array", () => {
      expect(motorcycleRider.motorcycleShowroom(["50", "55"], 100)).to.equal(
        "There are 2 available motorcycles matching your criteria!"
      );
    });
    it("throws for non-array", () => {
      expect(() => motorcycleRider.motorcycleShowroom("55", 100)).to.throw();
    });
    it("throws for non-number", () => {
      expect(() =>
        motorcycleRider.motorcycleShowroom(["55"], "100")
      ).to.throw();
    });
  });

  describe("otherSpendings test", () => {
    it("returns correct sum without discount", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          false
        )
      ).to.equal("You spend $600.00 for equipment and consumables!");
    });
    it("returns correct sum with discount", () => {
      expect(
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          true
        )
      ).to.equal(
        "You spend $540.00 for equipment and consumables with 10% discount!"
      );
    });
    it("throw invalid input in first array", () => {
      expect(() =>
        motorcycleRider.otherSpendings(5, ["engine oil", "oil filter"], true)
      ).to.throw();
    });
    it("throw invalid input in second array", () => {
      expect(() =>
        motorcycleRider.otherSpendings(["helmet", "jacked"], 9, false)
      ).to.throw();
    });
    it("throw invalid input - boolean property", () => {
      expect(() =>
        motorcycleRider.otherSpendings(
          ["helmet", "jacked"],
          ["engine oil", "oil filter"],
          9
        )
      ).to.throw();
    });
  });
});
