// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “shradhakhapra” , username should be “@shradhakhapra13”

let str = prompt("Enter your full name");
// let str2 = "@";
// let userName1 = str2.concat(str);
// let userName2 = userName1.concat(str.length);
// console.log(`Your username is ${userName2}`);
// another mehtod 
let newName = "@"+ str + str.length;
console.log(`Your username is ${newName}`);