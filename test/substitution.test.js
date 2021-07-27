const expect = require("chai").expect;
const  { substitution }  = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const input = "thinkful";
      const alphabet = undefined;
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const input = "thinkful";
      const alphabet = "tooshort";
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      expect(actual).to.be.false;
    });
    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const input = "thinkful";
      const alphabet = "aaamnbvcxzsdghjklpoiuytrea";
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
      const input = "japan";
      const alphabet = "#mnbvcxzlkjhgfdsaoiuytrew*";
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      const expected = "k#s#f";
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const input = "i love japan";
      const alphabet = "#mnbvcxzlkjhgfdsaoiuytrew*";
      const encode = true;
      const actual = substitution(input, alphabet, encode);
      const expected = "l hdtv k#s#f";
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const encode = false;
      const actual = substitution(input, alphabet, encode);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of key with unique characters", () => {
      const input = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const encode = false;
      const actual = substitution(input, alphabet, encode);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should preserve spaces", () => {
      const input = "l hdtv k#s#f";
      const alphabet = "#mnbvcxzlkjhgfdsaoiuytrew*";
      const encode = false;
      const actual = substitution(input, alphabet, encode);
      const expected = "i love japan";
      expect(actual).to.equal(expected);
    });
  });
});