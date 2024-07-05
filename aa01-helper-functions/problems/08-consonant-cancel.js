/*
Write a function firstVowel(word) that takes in a word string and returns the
index of the first vowel in the word.

Write a function consonantCancel(sentence) that takes in a sentence and returns
a new sentence where every word begins with it's first vowel. Use the firstVowel
function as a helper function.
*/

// Your code here 
function firstVowel(word){
  const vowels= "aeiou";
  for(let i=0; i<=word.length-1;i++){
      if(vowels.includes(word[i])){
          return i;
      }
  }
  return null;
}

function consonantCancel(sentence){
    let words = sentence.split(" ");
    for(let i=0;i<=words.length-1;i++){
      words[i]= String(words[i]).slice(firstVowel(words[i]));
    }
    return words.join(" ");
}

 console.log(consonantCancel("down the rabbit hole"));               // "own e abbit ole"
 console.log(consonantCancel("writing code is challenging"));        // "iting ode is allenging"
 console.log(consonantCancel("practice makes perfect"));             // "actice akes erfect"
 console.log(consonantCancel("fear nothing challenge everything!")); // "ear othing allenge everything!"
 console.log(consonantCancel("stay happy!"));                        // "ay appy!"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  firstVowel,
  consonantCancel,
};
