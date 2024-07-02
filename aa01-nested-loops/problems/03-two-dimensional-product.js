/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

// Your code here 
function twoDimensionalProduct(numbers){
    let product=1;
    for(let i=0;i<=numbers.length-1;i++){

        for(let j=0; j<=numbers[i].length-1;j++){
            product*= numbers[i][j];
        }
    }
    return product;
}
 let arr1 = [[6, 4], [5], [3, 1]];
 console.log(twoDimensionalProduct(arr1)); // 360

 let arr2 = [[11, 4], [2]];
 console.log(twoDimensionalProduct(arr2)); // 88

 let arr3 = [
   [-9, 8, 4],
   [8, 2],
 ];
 console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
