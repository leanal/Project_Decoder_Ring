// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function encodeTheInput(input) {
    let encoded = [];
    const lowerCase = input.toLowerCase();

    for (let i = 0; i < lowerCase.length; i++) {
      let letterCode = lowerCase.charCodeAt(i); // ascii code of the inputted character
      let letterIdx = letterCode - 96; // sets alphabet index to 1-26
      
      if (letterCode > 96 && letterCode < 123) { // if a-z
        if (letterIdx > 9) letterIdx--; // decreases index from 'j' and up
        let y = letterIdx % 5;
        let x = Math.floor(letterIdx / 5) + 1;
        if (y === 0) y = 5, x--;
        encoded.push(y, x);
      } else {
        encoded.push(lowerCase.charAt(i)); // leaves other characters as is
      }
    }
    return encoded.join("");
  }

  function decodeTheInput(code) {
    let wordsArr = code.reduce((acc, num) => {
      let letter = [];

      for (let i = 0; i<num.length; i = i+2) {  
        // converts string to a number
        let y = parseInt(num.substr(i, 1));
        let x = parseInt(num.substr(i+1, 1));
        
        let letterCode = (((x * 5) + y ) -5) + 96; // converts to ascii decimal code
        
        if (letterCode > 105) letterCode++; // adds 1 if ascii equivalent is greater than 'j'

        if (letterCode === 105 || letterCode === 106) {
          letter.push("(i/j)");
        } else {
          letter.push(String.fromCharCode(letterCode)); // pushes the ascii equivalent letter
        };

      }
      acc.push(letter.join("")); // pushes decoded word to an array
      return acc;
    }, []);
    return wordsArr.join(" ");
  };

  function oddNumber(code) {
    const join = code.join("");
    const oddCheck = join.length % 2; // checks if the length of all numbers is odd
    return (oddCheck === 1);
  };

  // main function
  function polybius(input, encode = true) {
    let coded = [];

    if (encode) {
      return encodeTheInput(input);
    } else if (!encode) {
      const code = input.split(" ");

      if (oddNumber(code)) return false;

      return decodeTheInput(code);
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
