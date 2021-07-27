const expect = require("chai").expect;
const  { polybius }  = require("../src/polybius");

describe("polybius()", () => {
    describe("encoding a message", () => {
      it("should encode a message by translating each letter to number pairs", () => {
        const input = "fade";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "12114151"
        expect(actual).to.equal(expected);
      });
      it("should translate both 'i' and 'j' to 42", () => {
        const input = "meiji";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "2351424242"
        expect(actual).to.equal(expected);
      });
      it("should leave spaces as is", () => {
        const input = "meiji choco";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "2351424242 3132433143"
        expect(actual).to.equal(expected);
      });
    });
    describe("decoding a message", () => {
      it("should decode a message by translating each pair of numbers into a letter", () => {
        const input = "12114151";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "fade";
        expect(actual).to.equal(expected);
      });
      it("should translate 42 to both 'i' and 'j'", () => {
        const input = "4211531133";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "(i/j)apan";
        expect(actual).to.equal(expected);
      });
      it("should leave spaces as is", () => {
        const input = "4211531133 13431551";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "(i/j)apan love";
        expect(actual).to.equal(expected);
      });
      it("should return false if the length of all numbers is odd", () => {
        const input = "421153113 13431551";
        const encode = false;
        const actual = polybius(input, encode);
        //const expected = "(i/j)apan love";
        expect(actual).to.be.false;
      });
    });
});