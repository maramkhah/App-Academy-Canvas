/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

// Your code here 
function longestWord(sentence){
    let result ="";
    let temp=0;
    let word = sentence.split(" ");
    temp = word[0].length;
    for(let i=0;i<=word.length-1;i++){
        if(word[i].length>temp){
            temp=word[i];
            result = word[i];
        }
    }
    return result;
}
 console.log(longestWord('where did everyone go')); // 'everyone'
 console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
 console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
