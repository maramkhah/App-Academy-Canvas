/*
Time to practice variables! Follow the comments for instructions. Be sure to
test your work by running your code and the test specs!
*/

// 1. Declare a variable called `firstName` and assign it your first name
//    as a string:

// Your code here 
let firstName = "Shayon";

// 2. Declare a variable called `lastName` and assign it your last name
//    as a string:

// Your code here 
let lastName = "Maramkhah";

// 3. Declare a variable called `age`:

// Your code here 
let age;

// 4. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

// Your code here 
console.log(firstName);
console.log(lastName);
console.log(age);

// 5. Assign the `age` variable to a number:

// Your code here 
age=31;

// 6. Print out the `firstName`, `lastName`, and `age` variables. What
//    do you expect them to be when they get printed?

// Your code here 
console.log(firstName);
console.log(lastName);
console.log(age);

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
const obj = {};
try { obj.firstName = firstName; } catch {}
try { obj.lastName = lastName; } catch {}
try { obj.age = age; } catch {}
module.exports = obj;
