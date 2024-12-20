// Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((val) => {
//     console.log(val*val);
// })

// 2nd syntax
let arr = [1,2,3,4,5,6,7,8,9,10];

let calcSquare = (val) => {
    console.log(val*val);
}

arr.forEach(calcSquare);
