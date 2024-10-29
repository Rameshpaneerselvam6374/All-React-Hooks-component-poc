//using to thhe filter method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

//using to the for loop method
let number = [23,24,53,65,78,90];
let even = [];
let odd = [];

for(let i=0; i<number.length; i++){
    if(number[i] %2 === 0){
        even.push(number[i]);
    }else{
    odd.push(number[i]);
    }
}
console.log(`enter the odd number ${odd}`)
console.log(`enter the value in even ${even}`)

// using to the while function

let number1 = [1,2,3,4,5,6,7,8,9,0];
let even2 = [];
let odd2 = [];
let i = 0;
while(i<number1.length){
    if(number1[i] % 2 == 0){
    even2.push(number1[i]);
    }else
    {
        odd2.push(number1[i]);
    }
    i++;
}
console.log(`enter the odd ${odd2}`);
console.log(`enter the even ${even2}`);

//using to thhe for each method

let number2 = [1,2,3,4,5,6,7,8];
let even1 = [];
let odd1 = [];

number2.forEach(element => {
    if(element%2===0)
    even1.push(element);
    else
    odd1.push(element);
})

console.log(`even number ${even1}`);
console.log(`odd number ${odd1}`);


// using to the for of method

let val = [1,2,3,4,5,6];
let even3 = [];
let odd3 = [];

for (const num of val){
    if(num % 2 === 0){
        even3.push(num);
    }
    else{
        odd3.push(num);
    }
}
console.log(`enter the even ${even3}`);
console.log(`enter the odd ${odd3}`);

// using to the reduce method

let arr = [1,2,3,4,5,6,7,8,9];
let even4 = [];
let odd4 = [];

arr.reduce(function (retn , sum){
    if(sum%2===0){
        even4.push(sum);
    }else{
        odd4.push(sum);
    }
    return retn;
},[])

console.log(even4);
console.log(odd4);