const input = require('readline-sync') ;

let firstName = input.question("Enter your first name: ");
let index = input.questionInt("Enter an index for the string: ");

console.log("The character at index " + index + " is " + firstName[index]);