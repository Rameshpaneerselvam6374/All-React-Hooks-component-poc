let number = [34,54,25,94,39];
let max = number[0];

for ( let i=1; i<number.length;i++){
    if(number[i]>max){
        max = number[i];
    }
}

console.log(max);
// let numbers = [34,54,25,94,39];
// let value = Math.value(...numbers);

// console.log(big);

// let big = number.reduce((accumulator, currentValue) => {
//     return Math.big(accumulator , currentValue);
// }, number[0]);

// console.log(big);