/*
Commenting Someone Else's Code

Replace variables using the example input in code comments. Then fix the bug
in the code so that the example input matches the expected output.
*/

function charactersNotQuiteAtTheEdge(str) {
  let middle = 1+str.length/2
  let char1= str.substring(1,2);
  let char2 = str.substring(str.length-2,str.length-1)
  return char1 + char2;
}

 console.log(charactersNotQuiteAtTheEdge('fringe')); // expected output: 'rg'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = charactersNotQuiteAtTheEdge;
