/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

//review
// Your code here 
function shortestWord(sentence){
    let words = sentence.split(" ");
    let shortestWord = words[0]; 
    let shortestLength = shortestWord.length;

    for (let i = 1; i < words.length; i++) {
        let currentWord = words[i];
        let currentLength = words[i].length;

      if (currentLength < shortestLength || 
            (currentLength === shortestLength && i > sentence.indexOf(shortestWord))) {
            shortestWord = currentWord;
            shortestLength = currentLength;
        }
    }

    return shortestWord;
}

 console.log(shortestWord('what a wonderful life'));     // 'a'
 console.log(shortestWord('the quick brown fox jumps')); // 'fox'
 console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
