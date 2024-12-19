// Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number isa multiple of 5 or not.
// let name = prompt("hello");
// console.log("hello ",name);

let number = prompt("Enter a number:");

if(number%5===0){
    console.log(number, "is a multiple of 5");
} else {
    console.log(number, "is not a multiple of 5");
}
