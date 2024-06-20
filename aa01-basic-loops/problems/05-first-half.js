/*
Define a function called `firstHalf` that takes in a string
parameter. The function should return a new string containing only the first
half of characters in the string parameter.
*/

function firstHalf(str) {
  let newStr='';
  let middle;
  if(str.length%2!=0){
    middle =1+str.length/2;
  }else{
    middle = str.length/2;
  }
  newStr=str.substring(0,middle);
  return newStr;
}

 console.log(firstHalf('academy')); // 'acad'
 console.log(firstHalf('planet'));  // 'pla'
 console.log(firstHalf('sport'));   // 'spo'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstHalf;
