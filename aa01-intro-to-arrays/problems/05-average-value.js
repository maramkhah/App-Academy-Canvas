/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/

// Your code here 
function avgVal(array){
    let size = array.length-1;
    let sum=0;
    if(array.length!=0){
    for(let i=0;i<=size;i++){
        sum+=array[i];
    }
    return sum/array.length;
    }else{
    return null;
    }
}


 console.log(avgVal([5, 10]));         // 7.5
 console.log(avgVal([3, 7, 2, 1, 2])); // 3
 console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;