/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 

function abbreviate(word){
   return word.replace(/[aeiou]/gi,"")
}
 console.log(abbreviate('wonderful')); // 'wndrfl'
 console.log(abbreviate('mystery')); // 'mystry'
 console.log(abbreviate('Accordian')); // 'ccrdn'
 console.log(abbreviate('Shaeiou'));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
