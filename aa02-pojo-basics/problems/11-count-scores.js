/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/

function countScores(people) {
  const scoreObject = {};

  for(let i=0;i<people.length;i++){//loop through people array of objects
    let peopleObj=people[i]; // grab people objects
    let{name,score}= peopleObj;// rest spread 

    if(scoreObject[name]===undefined){//if key does undefined set key with score
      scoreObject[name]= score;
    }else{
      scoreObject[name]+= score;//else add key and score 
    }
  }
  return scoreObject;
}

let ppl = [{name: "Anthony", score: 10},
  {name: "Fred", score : 10},
  {name: "Anthony", score: -8},
  {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

let peeps = [
{name: "Anthony", score: 2},
{name: "Winnie", score: 2},
{name: "Fred", score: 2},
{name: "Winnie", score: 2},
{name: "Fred", score: 2},
{name: "Anthony", score: 2},
{name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
