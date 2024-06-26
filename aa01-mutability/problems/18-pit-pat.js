/*
Write a function pitPat(max) that accepts a number as an arg. The function
should return an array containing all positive numbers less than or equal to max
that are divisible by either 4 or 6, but not both.
*/

// Your code here 
function pitPat(max){
    let array=[];
    for(let i=0;i<=max;i++){
        if((i%4===0||i%6===0)&& !(i%4===0&&i%6===0)){
            array.push(i);
        }
    }
    return array;
}

 console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
 console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pitPat;