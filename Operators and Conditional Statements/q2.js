// Qs2. Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks = prompt("Enter your marks (0-100) ");
if(marks>=80 && marks<=100){
    console.log("YOUR GRADE IS 'A' ");
} else if(marks>=70 && marks<=79){
    console.log("YOUR GRADE IS 'B' ");
} else if(marks>=60 && marks<=69){
    console.log("YOUR GRADE IS 'C' ");
} else if(marks>=50 && marks<=59){
    console.log("YOUR GRADE IS 'D' ");
} else if(marks>=0 && marks<=49){
    console.log("YOUR GRADE IS 'F' ");
} else {
    console.log("INVALID MARKS");
}