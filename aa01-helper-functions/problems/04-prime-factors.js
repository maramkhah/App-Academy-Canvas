/*
Write a function isPrime(number) that returns true if the number is a prime
number. A prime number is a number that is only divisible by 1 and itself.

Write a function primeFactors(number) that accepts a number as an argument. The
function should return an array containing all of the prime numbers that can
divide the given number evenly. Use the isPrime function as a helper function.
*/

// Your code here 
function isPrime(number){
  if(number <2){
      return false
  }
  for(let i=2;i<number;i++){
      if(number%i===0){
          return false
      }
  }
  return true;
}

function primeFactors(number){
  let result =[];
  for(let i=0;i<=number;i++){
    if(number%i===0&&isPrime(i)===true){
      result.push(i);
    }
  }
  return result;
}
 console.log(primeFactors(12)); // [2, 3]
 console.log(primeFactors(7)); // [7]
 console.log(primeFactors(16)); // [2]
 console.log(primeFactors(30)); // [2, 3, 5]
 console.log(primeFactors(35)); // [5, 7]
 console.log(primeFactors(49)); // [7]
 console.log(primeFactors(128)); // [2]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  isPrime,
  primeFactors,
};
