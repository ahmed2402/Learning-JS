// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price afterapplying offer

let items = [250, 645, 300, 900, 50];
// for(let i=0 ; i<items.length; i++){
//     items[i]=items[i]*0.9;
//     console.log(items[i]);
// }
for(let val of items){
    console.log(val*0.9);
}
