/*
Write a function called `myFilter` that behaves like the `Array.filter`
method.
*/

// Your code here 
function myFilter(array,callback){
  let isFound=false;
  let result = [];
  array.forEach(element => {
    isFound = callback(element);
    if(isFound===true){
      result.push(element);
    }
  });
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

const filteredFriends = myFilter(friends, friend => {
  return friend.name[0] === "A" && friend.yearsOfFriendship > 5;
}); // [ { name: 'Agatha', yearsOfFriendship: 6 } ]

console.log(filteredFriends);
/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
