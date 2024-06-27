/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

// Your code here 
function initials(name){
    let result ="";
    let word = name.split(" ");
    for(let i=0;i<=word.length-1;i++){
        result+= word[i].charAt(0).toUpperCase();
    }
    return result;
}

 console.log(initials('anna paschall')); // 'AP'
 console.log(initials('Mary La Grange')); // 'MLG'
 console.log(initials('brian crawford scott')); // 'BCS'
 console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
