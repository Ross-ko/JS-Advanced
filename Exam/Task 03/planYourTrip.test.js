import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe("Test Suit", function () {
  describe("test choosingDestination", () => {
    it("Invalid Year!", () => {
      expect(() =>
        planYourTrip.choosingDestination("Ski Resort", "Winter", 1986)
      ).to.throw();
    });
    it("Invalid Year!(2)", () => {
      expect(() =>
        planYourTrip.choosingDestination("Morocco", "Summer", 2050)
      ).to.throw();
    });
    it("This destination is not what you are looking for.", () => {
      expect(() =>
        planYourTrip.choosingDestination("Bali", "Winter", 2024)
      ).to.throw();
    });
    it("This destination is not what you are looking for.(2)", () => {
      expect(() =>
        planYourTrip.choosingDestination("Sozopol", "Summer", 2024)
      ).to.throw();
    });
    it("This destination is not what you are looking for.(3)", () => {
      expect(() =>
        planYourTrip.choosingDestination("Karabunar", "Autumn", 2024)
      ).to.throw();
    });
    it("Consider visiting during the Winter for the best experience at the Ski Resort.", () => {
      expect(
        planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)
      ).to.equal(
        "Consider visiting during the Winter for the best experience at the Ski Resort."
      );
    });
    it("Great choice! The Winter is the perfect time to visit the Ski Resort.", () => {
      expect(
        planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)
      ).to.equal(
        "Great choice! The Winter is the perfect time to visit the Ski Resort."
      );
    });
  });
  describe("test exploreOptions", () => {
    it("Valid input", () => {
      let activities = ["Skiing", "Swimming", "Snowboarding"];
      let activityIndex = 1;

      let result = planYourTrip.exploreOptions(activities, activityIndex);

      expect(result).to.equal("Skiing, Snowboarding");
    });
    it("Valid input(2)", () => {
      let activities = ["Skiing"];
      let activityIndex = 0;

      let result = planYourTrip.exploreOptions(activities, activityIndex);

      expect(result).to.equal('');
    });
    it("Invalid Information!(1)", () => {
      expect(() => planYourTrip.exploreOptions("invalid", 1)).to.throw();
    });
    it("Invalid Information!(2)", () => {
      expect(() =>
        planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "invalid")
      ).to.throw();
    });
    it("Invalid Information!(3)", () => {
      expect(() =>
        planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -1)
      ).to.throw();
    });
    it("Invalid Information!(4)", () => {
      expect(() =>
        planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 5)
      ).to.throw();
    });
    it("Invalid Information!(5)", () => {
      expect(() =>
        planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 1.5)
      ).to.throw();
    });
    it("Invalid Information!(6)", () => {
      expect(() => planYourTrip.exploreOptions([], 2)).to.throw();
    });
    it("Invalid Information!(7)", () => {
      expect(() => planYourTrip.exploreOptions(2)).to.throw();
    });
    it("Invalid Information!(8)", () => {
      expect(() => planYourTrip.exploreOptions()).to.throw();
    });
    it("Invalid Information!(9)", () => {
      expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"])).to.throw();
    });
  });
  describe("test estimateExpenses", () => {
    it("Invalid Information!(1)", () => {
      expect(() =>
        planYourTrip.estimateExpenses("string", "string")
      ).to.throw();
    });
    it("Invalid Information!(2)", () => {
      expect(() => planYourTrip.estimateExpenses(9, "string")).to.throw();
    });
    it("Invalid Information!(3)", () => {
      expect(() => planYourTrip.estimateExpenses("string", 9)).to.throw();
    });
    it("Invalid Information!(4)", () => {
      expect(() => planYourTrip.estimateExpenses({}, 9)).to.throw();
    });
    it("Invalid Information!(5)", () => {
      expect(() => planYourTrip.estimateExpenses(9)).to.throw();
    });
    it("Invalid Information!(6)", () => {
      expect(() => planYourTrip.estimateExpenses(-500, -300)).to.throw();
    });
    it("Invalid Information!(7)", () => {
      expect(() => planYourTrip.estimateExpenses(500, -300)).to.throw();
    });
    it("Invalid Information!(8)", () => {
      expect(() => planYourTrip.estimateExpenses(-500, 300)).to.throw();
    });
    it("Invalid Information!(9)", () => {
      expect(() => planYourTrip.estimateExpenses(0, 300)).to.throw();
    });
    it("Invalid Information!(10)", () => {
      expect(() => planYourTrip.estimateExpenses(500, 0)).to.throw();
    });
    it("Invalid Information!(11)", () => {
      expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw();
    });
    it("Invalid Information!(12)", () => {
      expect(() => planYourTrip.estimateExpenses({}, {})).to.throw();
    });
    it("Invalid Information!(13)", () => {
      expect(() => planYourTrip.estimateExpenses([], -6)).to.throw();
    });
    it("Valid Information!(1)", () => {
      expect(planYourTrip.estimateExpenses(200, 2)).to.equal(
        "The trip is budget-friendly, estimated cost is $400.00."
      );
    });
    it("Valid Information!(2)", () => {
      expect(planYourTrip.estimateExpenses(300, 2)).to.equal(
        "The estimated cost for the trip is $600.00, plan accordingly."
      );
    });
  });
});
