// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end
let comp = ["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"];
console.log(comp);
// a)
let deleted =comp.shift();
console.log("deleted =  ",deleted );
console.log(comp);
//b)
comp.splice(1,1,"Ola");
console.log(comp);
//c)
comp.push("Amazon");
console.log(comp);
