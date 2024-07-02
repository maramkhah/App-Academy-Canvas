/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  let array =[];
  let max= matrix[0][0];
  let max2= matrix[0][1];
  let max3 = matrix[0][2];
  let temp1 = matrix[1][0];
  let temp2 = matrix[1][1];
  let temp3 = matrix[1][2];
  for(let i=0;i<=matrix.length-1;i++){
        temp1 = matrix[i][0];
        temp2 = matrix[i][1];
        temp3 = matrix[i][2];
        if(temp1>max){
          max = temp1;
        }
        if(temp2>max2){
          max2 = temp2;
        }
        if(temp3>max3){
          max3 = temp3;
        }
    for(let j=0;j<=matrix.length-1;j++){
      
    }
  }
  array.push(max);
  array.push(max2);
  array.push(max3);

  return array;
}

 matrix = [
   [5, 9, 21],
   [9, 19, 6],
   [12, 14, 15],
 ];

 console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
