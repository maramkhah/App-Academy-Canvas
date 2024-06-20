/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
let regex=/(\w)\1\1+/gm;
function tripletTrue(str){
    if(String(str).search(regex)>0){
        return true;
    }else{
        return false;
    }
}

 console.log(tripletTrue('caaabb'));        // true
 console.log(tripletTrue('terrrrrible'));   // true
 console.log(tripletTrue('runninggg'));     // true
 console.log(tripletTrue('bootcamp'));      // false
 console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
