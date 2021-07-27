// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // this function checks that no characters are the same
  function uniqueAlphabet(alphabetArr) {
    let unique = true;
    alphabetArr.reduce((found, character) => {
      alphabetArr.find(alphabet => {
        if (character === alphabet) found++;
      });
      if (found > 1) unique = false;
    }, 0);
    return unique;
  };

  function encodeTheInput(inputArr, alphabetArr){
    let encodedArr = [];
    inputArr.find(character => {
      const alphabetIdx = character.charCodeAt(0) - 97; // use ascii table to get the code of the inputted character then subtracts 97 to map it back to the alphabetArr (97 is 'a' in ascii table)
      (character === " ") ?  encodedArr.push(character) : encodedArr.push(alphabetArr[alphabetIdx]); // pushes the value found on the alphabetArr except spaces(" ").
    });
    return encodedArr.join("");
  };

  function decodeTheInput(inputArr, alphabetArr){
    let decodedArr = [];
    inputArr.find(character => {
      const charCode = alphabetArr.indexOf(character) + 97; // find the index of the inputted character from alphabetArr then add 97 (97 is 'a' in ascii table)
      const getChar = String.fromCharCode(charCode); // returns the value from ascii table
      (character === " ") ? decodedArr.push(" ") : decodedArr.push(getChar);
    });
    return decodedArr.join("");
  };

  function substitution(input, alphabet, encode = true) {

    if (alphabet === undefined || alphabet.length !== 26) return false;

    const alphabetLow = alphabet.toLowerCase();
    const alphabetArr = alphabetLow.split('');

    if (!uniqueAlphabet(alphabetArr)) return false;

    const inputLow = input.toLowerCase();
    const inputArr = inputLow.split('');

    if (encode) {
      return encodeTheInput(inputArr, alphabetArr);
    } else {
      return decodeTheInput(inputArr, alphabetArr);
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
