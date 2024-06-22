/*
Write a method caesarCipher(string, num) that takes in a string and a number.
The function should return a new string where every character of the original is
shifted num characters in the alphabet.

Feel free to use this variable: let alphabet = "abcdefghijklmnopqrstuvwxyz";
*/
//Getting undefined if alphabet not extended.
//What if the offset is out of bounds.
function caesarCipher(str, offset) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    let newString="";
    let index=0;
    if(offset >=0&&offset<=25){
    for(let i=0;i<=str.length-1;i++){
         if(alphabet.includes(str[i])){
            index = alphabet.search(str[i]); 
            newString+=alphabet[index+offset];
         }
    }
}else{
    return "Bad offset!"
}
    return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
 console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
 console.log(caesarCipher("zebra", 4)); // "difve"
 console.log(caesarCipher("shayon maramkhah",17));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = caesarCipher;
