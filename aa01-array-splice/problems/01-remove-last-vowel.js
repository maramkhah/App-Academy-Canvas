/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function removeLastVowel(word){
    let vowels = "aeiou";
    let index=0;
    for(let i=word.length-1;i>=0;i--){
        if(vowels.includes(word[i])){
            index= word.lastIndexOf(word[i]);
            word = word.substring(0,index)+word.substring(index+1,word.length);
           return word;
        }
    }
    return word;
}
 console.log(removeLastVowel('bootcamp')); // 'bootcmp'
 console.log(removeLastVowel('better')); // 'bettr'
 console.log(removeLastVowel('graph')); // 'grph'
 console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
