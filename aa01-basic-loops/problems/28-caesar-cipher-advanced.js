/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newString="";
function caesarCipher(str, offset) {
    for(let i=0;i<=str-1;i++){
         if(alphabet.includes(str[i])){
            newString+=alphabet[i+offset];
         }
    }
    return newString;
}

 console.log(caesarCipher("apple", 1)); // "bqqmf"
 console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
 console.log(caesarCipher("zebra", 4)); // "difve"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
