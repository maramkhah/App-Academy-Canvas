/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
*/

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

// Hint: create an array of vowels to use in your solution.
let vowels ="aeiouAEIOU";

const threeVowelFriend= friends.find((friend)=>{
    let {name}= friend;//destructuring for name key to variable

    let counter =0;
    for(let i=0;i<=name.length;i++){
      if(vowels.includes(name[i])){
        counter++;
      }
    }
    return counter>=3;

})

 console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
