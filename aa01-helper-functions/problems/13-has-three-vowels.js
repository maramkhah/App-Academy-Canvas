/*
Write a function isVowel(char) that accepts a single character string as an
argument and true if it is a vowel. Return false otherwise.
A vowel can be 'a', 'e', 'i', 'o', or 'u'.

Write a function hasThreeVowels(string) that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels. Use the hasVowel function as a helper
function.
*/

// Your code here
function isVowel(char){
  let vowels ="aeiou";
  if(vowels.includes(char)){
    return true;
  }else{
    return false;
  }
}
function hasThreeVowels(string){
  let count =0;
  for(let i=0;i<=string.length-1;i++){
      if(isVowel(string[i])===true){
        count++;
      }
      if(count>=3){
        return true;
      }
  }
  return false;
}

 console.log(hasThreeVowels("delicious"));     //  true
 console.log(hasThreeVowels("bootcamp prep")); //  true
 console.log(hasThreeVowels("bootcamp"));      //  true
 console.log(hasThreeVowels("dog"));           //  false
 console.log(hasThreeVowels("go back"));       //  false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isVowel,
  hasThreeVowels
};
