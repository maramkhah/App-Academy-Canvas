/*
Write a function tripler(nums) that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.
*/

// Your code here 
function tripler(numbers){
    let array=[];
    for(let i=0;i<=numbers.length-1;i++){
        array.push(numbers[i]*3);
    }
    return array;
}

 console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
 console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripler;