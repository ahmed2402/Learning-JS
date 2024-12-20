// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let arr = [85, 97, 44, 37, 76, 60];
let sum=0,avg;

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; 
// }
// avg = sum/arr.length;
// console.log("YOUR AVG IS ",avg);
// using for of
for (let val of arr) {
    sum += val;
}
avg = sum/arr.length;
console.log("YOUR AVG IS ",avg);