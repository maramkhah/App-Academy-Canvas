/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function mostVowels(sentence){
    let vowels="aeiou";
    let words = sentence.split(" ");
    let vowelCount=0;
    let maxVowel=0;
    let chars;
    const map1 = new Map();
    if(sentence===""){
        return "";
    }
    for(let i=0;i<=words.length-1;i++){
       chars= words[i].split("");

       //iterate through char
       for(let j=0;j<=chars.length;j++){
            if(vowels.includes(chars[j])){
                vowelCount++;
                map1.set(words[i],vowelCount);
            }
       }
       vowelCount=0;
    }

    const iter = map1.values();
    
    for(let i=0;i<=map1.size;i++){
            vowelCount=iter.next().value;
            if(vowelCount>maxVowel){
                maxVowel=vowelCount;
            }
        
    }
    for(let [key,value] of map1.entries()){
        if(value===maxVowel){
            return key;
        }
    }

}
 console.log(mostVowels("what a wonderful life")); // "wonderful"
 console.log(mostVowels("the quick brown fox jumps")); // "quick"
 console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
