/*
Define a function firstAndLast that takes in an array of numbers and returns the
sum of the first and last element if there is an even number of elements in the
array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.
*/

// Your code here 
function firstAndLast(array){
    let size= array.length-1;
    let sum;
    let difference;
    if(array.length%2===0){
        sum=array[0]+array[size];
        return sum;
    }else{
        difference = array[0]-array[size];
        return difference;
    }
}

 console.log(firstAndLast([1, 2, 3, 4]));    // 5
 console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
 console.log(firstAndLast([12, 5]));         // 17
 console.log(firstAndLast([12]));            // 0
 console.log(firstAndLast([7, 11, 3]));      // 4

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;