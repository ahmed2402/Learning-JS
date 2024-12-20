// Qs. Create an arrow function to perform the same task.

let countVowels = (str) => {
    let count = 0;
    for(let a of str){
        if(a==="a" || a==="e" || a==="i" || a==="o" || a==="u"){
            count++;
        }
    }
   return count;
}

countVowels("ahmed"); //2