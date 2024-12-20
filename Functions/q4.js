// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+

let mark = [44,54,99,92,94,77];

let newArr = mark.filter((val) => {
    return val>=90;
})

console.log(newArr);