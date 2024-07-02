/*
Define a function called intersect that takes in two array parameters and
returns a new array containing the elements common to both arrays.
*/

// Your code here 
function intersect(arr1,arr2){
    const result = arr1.filter((value)=>arr2.includes(value));
    return result;
}
 console.log(intersect(["a", "b", "c", "d"], ["b", "d", "e"])); //=> [ 'b', 'd' ]
 console.log(intersect(["a", "b", "c"], ["x", "y", "z"])); //=> []

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = intersect;
