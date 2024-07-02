/*
Write a function pairsMaker(arr) that takes in an array as an argument. The
function should return a 2D array where the subarrays represent unique pairs of
element from the input array.
*/

// Your code here 
function pairsMaker(array){
    let subarray=[];
    for(let i=0; i<=array.length-1;i++){
        let char1 =array[i];
        for(let j=i+1;j<=array.length-1;j++){
            let char2= array[j];
            subarray.push([char1,char2])
        }
    }
    return subarray;
}
 console.log(pairsMaker(["a", "b", "c", "d"]));
// //=> [ [ 'a', 'b' ],
// //     [ 'a', 'c' ],
// //     [ 'a', 'd' ],
// //     [ 'b', 'c' ],
// //     [ 'b', 'd' ],
// //     [ 'c', 'd' ] ]

// console.log(pairsMaker(["Rosemary", "Alex", "Connor"]));
// //=> [ [ 'Rosemary', 'Alex' ],
// //   [ 'Rosemary', 'Connor' ],
// //   [ 'Alex', 'Connor' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pairsMaker;
