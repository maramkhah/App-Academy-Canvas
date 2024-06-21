/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
let vowels = ["a","e","i","o","u"];
let replacement = ["e","i","o","u","a"];
let newString='';
let index=0;
function vowelCipher(str){
   for(let i=0; i<=str.length-1;i++){
        if(vowels.includes(str[i])){
             index = vowels.indexOf(str[i]);
            newString+=replacement[index];
        }else{
            newString+=str[i];
        }
   }
   return newString;
}
 console.log(vowelCipher("bootcamp")); // "buutcemp"
 //console.log(vowelCipher("paper cup")); // "pepir cap"
 //console.log(vowelCipher("Shayon"));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
