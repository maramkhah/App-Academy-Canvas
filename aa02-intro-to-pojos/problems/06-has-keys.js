/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
const hasKeys=(obj,array)=>{
  let isKey=true;;
  for(let i=0;i<=array.length-1;i++){
    if(obj[array[i]]===undefined){
      isKey=false;
    }
  }
  return isKey;
}
*/

// Your code here 
function hasKeys(obj,array){
  for(let i =0;i<array.length;i++){
    if(!Object.hasOwn(obj,array[i])){
      return false;
    }
  }
  return true;
}

 let survey = {
   name: 'Check',
   question: 'Satisfied?',
   choices: ['Yes', 'No']
 }
 console.log(hasKeys(survey, ['question', 'choices'])); // true
 console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch {}
