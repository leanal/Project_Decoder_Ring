// Write your tests here!
const expect = require("chai").expect;
const  { caesar }  = require("../src/caesar");

describe("caesar()", () => {
    describe("error handling", () => {
      it("should return false if shift is not present", () => {
        const input = "Hello World";
        const shift = null;
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
      });
      it("should return false if shift is equal to 0", () => {
        const input = "Hello World";
        const shift = 0;
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
      });
      it("should return false if shift is greater than 25", () => {
        const input = "Hello World";
        const shift = 30;
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
      });
      it("should return false if shift is less than -25", () => {
        const input = "Hello World";
        const shift = -28;
        const encode = true;
        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
      });
    });
    
    describe("encoding", () => {
        it("should encode a message by shifting the letters", () => {
          const input = "Hello";
          const shift = 1;
          const encode = true;
          const actual = caesar(input, shift, encode);
          const expected = "ifmmp";
          expect(actual).to.equal(expected);
        });
        it("should leaves spaces and other symbols as is", () => {
            const input = "hello world!";
            const shift = 1;
            const encode = true;
            const actual = caesar(input, shift , encode);
            const expected = "ifmmp xpsme!";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const input = "Hello World!";
            const shift = 1;
            const encode = true;
            const actual = caesar(input, shift , encode);
            const expected = "ifmmp xpsme!";
            expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const input = "Zebra";
            const shift = -1;
            const encode = true;
            const actual = caesar(input, shift , encode);
            const expected = "ydaqz";
            expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const input = "Zebra";
            const shift = -2;
            const encode = true;
            const actual = caesar(input, shift , encode);
            const expected = "xczpy";
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const input = "ifmmp";
            const shift = 1;
            const encode = false;
            const actual = caesar(input, shift , encode);
            const expected = "hello";
            expect(actual).to.equal(expected);
        });
        it("should leaves spaces and other symbols as is", () => {
            const input = "ifmmp xpsme!";
            const shift = 1;
            const encode = false;
            const actual = caesar(input, shift , encode);
            const expected = "hello world!";
            expect(actual).to.equal(expected);
        });
        it("should ignore capital letters", () => {
            const input = "IFmmp xpsme!";
            const shift = 1;
            const encode = false;
            const actual = caesar(input, shift , encode);
            const expected = "hello world!";
            expect(actual).to.equal(expected);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const input = "ejgwf!";
            const shift = 5;
            const encode = false;
            const actual = caesar(input, shift , encode);
            const expected = "zebra!";
            expect(actual).to.equal(expected);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const input = "uzwmv!";
            const shift = -5;
            const encode = false;
            const actual = caesar(input, shift , encode);
            const expected = "zebra!";
            expect(actual).to.equal(expected);
        });
    });
});