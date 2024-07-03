/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.

*/
//review

function maxColumn(matrix) {
  let width = matrix[0].length;
  let height=matrix.length;
  let array=[];

  for(let i=0;i<width;i++){
    let colMax=0;
    for(let j=0;j<height;j++){
      let number = matrix[j][i]
      if(number > colMax){
        colMax=number;
        }
      }
      array.push(colMax);
    }
    return array
  }

 matrix = [
   [5, 9, 21],
   [9, 19, 6],
   [12, 14, 15],
 ];

 console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
