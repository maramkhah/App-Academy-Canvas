/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 
function leastCommonMultiple(a,b){
    let product= a*b;
    let array =[];
    for(let i=1;i<= product;i++){
    {
        if(i%a===0&&i%b===0){
            array.push(i)
        }
    }
}
return array[0];

}


 console.log(leastCommonMultiple(4, 6)); // 12
 console.log(leastCommonMultiple(3, 5)); // 15
 console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
