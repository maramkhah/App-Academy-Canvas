/*
Write a function doubleLetterCount that takes in a string and returns the number
of times that the same letter repeats twice in a row.
*/

// Your code here 
function doubleLetterCount(str){
    let regex=/(\w)\1+/gm;
    let count =0;
    let word = str.split(" ");
    for(let i=0;i<=word.length;i++){
        if(String(word[i]).search(regex)>0){
            count++;
        }
    }
    return count;
}
 console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
 console.log(doubleLetterCount("bootcamp")); // 1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = doubleLetterCount;
