# Decoder Ring

Decoder Ring is an application that encodes and decodes all kinds of fun messages!

[Live Demo](https://leanal.github.io/Project_Decoder_Ring/)

*	Designed using complex algorithms.
*	Wrote unit tests using Mocha and Chai with a test-driven development process.
*	Built with JavaScript, HTML, and CSS.

## Caesar Shift

![caesar](/img/caesar-shift.png?raw=true)

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

"thinkful" -> "wklqnixo"

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.


## Polybius Square

![polybius](/img/square.JPG?raw=true)

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"**

When decoding the message, each pair of numbers is translated using the coordinates.


## Substitution Cipher

![polybius](/img/substitution.png?raw=true)

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".

This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
