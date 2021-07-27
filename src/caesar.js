// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  /* 
  The Caesar Shift is a type of substitution cipher originally used 
  by Julius Caesar to protect messages of military significance. 
  It relies on taking the alphabet and "shifting" letters 
  to the right or left, based on the typical alphabetic order.
  */
  function caesar(input, shift, encode = true) {

    if (!shift || shift < -25 || shift > 25) return false; // error handling
    
    let output = [];
    const inputLow = input.toLowerCase();
    
    for (let i=0; i<inputLow.length; i++){ // loops through the input
      const charCode = inputLow.charCodeAt(i); // gets the ascii code of the inputted character
      if (charCode > 96 && charCode < 123) { // checks if a-z
        (encode) ? output.push(encodeTheInput(charCode, shift)) : output.push(decodeTheInput(charCode, shift));
      } else {
        output.push(inputLow.charAt(i));
      }
    }
    return output.join("");
  }

    
  function encodeTheInput(charCode, shift) {
    let shiftedCode = charCode + shift;
    shiftedCode = handlesEndOfAlphabet(shiftedCode);
    return String.fromCharCode(shiftedCode);
  };

  function decodeTheInput(charCode, shift) {
    let shiftedCode = charCode - shift;
    shiftedCode = handlesEndOfAlphabet(shiftedCode);
    return String.fromCharCode(shiftedCode);
  };

  function handlesEndOfAlphabet(shiftedCode) {
    if (shiftedCode < 97) { // 97 is 'a' in ascii
      shiftedCode = shiftedCode + 26;
    } else if (shiftedCode > 122) {
      shiftedCode = shiftedCode - 26;
    }
    return shiftedCode;
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
