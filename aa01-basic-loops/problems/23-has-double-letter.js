/*
Write a function hasDoubleLetter(str) that accepts a string. The function should
return a boolean indicating whether the string contains two of the same
character consecutively. If the value passed into the function is not a string,
return null.
function hasDoubleLetter(str){
    let regex=/(\w)\1+/gm;
   if(typeof str!='string'){
    return null;
   }else if(str.search(regex)){
    return true;
   }else{
    return false;
   }

}
*/

// Your code here 
function hasDoubleLetter(str){
    let regex=/(\w)\1+/gm;
    if(typeof str !== "string"){
        return null;
    }
    else if(String(str).search(regex)===-1){
        return false;
    }else if(String(str).search(regex)>0){
        return true;
    }
}

 console.log(hasDoubleLetter('deer')); // true
 console.log(hasDoubleLetter('boot camp')); // true
 console.log(hasDoubleLetter('toggle')); // true
 console.log(hasDoubleLetter('taco')); // false
 console.log(hasDoubleLetter('jumper')); // false
 console.log(hasDoubleLetter(18)); // null
 console.log(hasDoubleLetter(['array'])); // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasDoubleLetter;
