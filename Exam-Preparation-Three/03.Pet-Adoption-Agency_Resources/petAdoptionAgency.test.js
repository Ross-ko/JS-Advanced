import {expect} from 'chai';
import {petAdoptionAgency} from './petAdoptionAgency.js'

describe("Test suit", function () {
    describe("test isPetAvailable", () => {
      it("Invalid input1", () => {
        expect(() => petAdoptionAgency.isPetAvailable(9, 9, true)).to.throw();
      });
      it("Invalid input2", () => {
        expect(() => petAdoptionAgency.isPetAvailable("9", "9", true)).to.throw();
      });
      it("Invalid input3", () => {
        expect(() => petAdoptionAgency.isPetAvailable("9", "9", "9")).to.throw();
      });
      it("Invalid input4", () => {
        expect(() => petAdoptionAgency.isPetAvailable()).to.throw();
      });
      it("Invalid input5", () => {
        expect(() =>
          petAdoptionAgency.isPetAvailable("maca", 9, "kuchi")
        ).to.throw();
      });
      it("counter < or = to 0 (1)", () => {
        expect(petAdoptionAgency.isPetAvailable("dog", 0, true)).to.equal(
          `Sorry, there are no dog(s) available for adoption at the agency.`
        );
      });
      it("counter < or = to 0 (2)", () => {
        expect(petAdoptionAgency.isPetAvailable("dog", -5, true)).to.equal(
          `Sorry, there are no dog(s) available for adoption at the agency.`
        );
      });
      it("counter > to 0 (1)", () => {
        expect(petAdoptionAgency.isPetAvailable("dog", 1, true)).to.equal(
          `Great! We have 1 vaccinated dog(s) available for adoption at the agency.`
        );
      });
      it("counter < or = to 0 (2)", () => {
        expect(petAdoptionAgency.isPetAvailable("dog", 1, false)).to.equal(
          `Great! We have 1 dog(s) available for adoption, but they need vaccination.`
        );
      });
    });
    describe("test getRecommendedPets", () => {
      it("Invalid input (1)", () => {
        expect(() =>
          petAdoptionAgency.getRecommendedPets(9, "string")
        ).to.throw();
      });
      it("Invalid input (2)", () => {
        expect(() =>
          petAdoptionAgency.getRecommendedPets("string", "string")
        ).to.throw();
      });
      it("Invalid input (3)", () => {
        expect(() => petAdoptionAgency.getRecommendedPets([], 9)).to.throw();
      });
      it("Invalid input (4)", () => {
        expect(() =>
          petAdoptionAgency.getRecommendedPets({}, "string")
        ).to.throw();
      });
      let recommendedPets = [
        { name: "bingo", traits: "black" },
        { name: "lily", traits: "black" },
      ];
  
      it("match traits", () => {
        expect(
          petAdoptionAgency.getRecommendedPets(
            [
              { name: "bingo", traits: "black" },
              { name: "lily", traits: "black" },
            ],
            "black"
          )
        ).to.equal(
          `Recommended pets with the desired traits (black): bingo, lily`
        );
      });
      it("don't match traits (2)", () => {
        expect(
          petAdoptionAgency.getRecommendedPets(
            [
              { name: "bingo", traits: "black" },
              { name: "lily", traits: "black" },
            ],
            "blue"
          )
        ).to.equal(
          `Sorry, we currently have no recommended pets with the desired traits: blue.`
        );
      });
    });
    describe("test adoptPet", () => {
      it("Invalid input (1)", () => {
        expect(() => petAdoptionAgency.adoptPet(9, "string")).to.throw();
      });
      it("Invalid input (2)", () => {
        expect(() => petAdoptionAgency.adoptPet("9", 9)).to.throw();
      });
      it("Invalid input (3)", () => {
        expect(() => petAdoptionAgency.adoptPet(9, 9)).to.throw();
      });
      it("success", () => {
        expect(petAdoptionAgency.adoptPet("Blue", "Rosen")).to.equal(
          `Congratulations, Rosen! You have adopted Blue from the agency. Enjoy your time with your new furry friend!`
        );
      });
    });
  });