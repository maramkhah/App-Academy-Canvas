/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function getLastVowel(word){
    const vowels= "aeiou";
    for(let i=word.length-1; i>=0;i--){
        if(vowels.includes(word[i])){
            return word[i];
        }
    }
    return null;
}

 console.log(getLastVowel('battery'));      // 'e'
 console.log(getLastVowel('tunnel'));       // 'e'
 console.log(getLastVowel('dog'));          // 'o'
 console.log(getLastVowel('conventional')); // 'a'
 console.log(getLastVowel('rhythm'));       // null
 console.log(getLastVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getLastVowel;
