/*
Write a function called `myMap` that behaves like the `Array.map`
method.
*/

// Your code here 
function myMap(array,callback){
  let isFriend=false;
  let result = [];
    for(let i=0;i<array.length;i++){
      isFriend= callback(array[i]);
      result.push(isFriend);
    }
    return result; 
}

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

const goodFriendsOrNot = myMap(
  friends,
  friend => friend.yearsOfFriendship > 5
); // [false, false, true, true]

console.log(goodFriendsOrNot);
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
