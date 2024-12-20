// Qs. Take a number n as input from user. Create an array of numbers from 1 to n
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let input = prompt("enter number");

let arr = [];
let j=0
for(let i=1;i<=input;i++){
   arr[j] = i;
   j++;
}
console.log(arr);

// calculate sum of all numbers in the array.
let sumArr = arr.reduce((sum, val) => {
    return sum+val;
})
console.log(sumArr);

// calculate product of all numbers in the array.
let mulArr = arr.reduce((sum, val) => {
    return sum*val;
})
console.log(mulArr);