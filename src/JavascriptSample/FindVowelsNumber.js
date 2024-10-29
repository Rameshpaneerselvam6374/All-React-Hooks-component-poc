// using to the Regular Expression

function CountVowels(str){
    let count = str.match(/[aeiou]/gi).length;
    
    return count;
}
// let string = prompt("enter the value : ");
// let result = CountVowels(string);
// console.log(result);
console.log(CountVowels("hello"));

// using to the for of loop method

let Vowels1 = ['a','e','i','o','u'];

function CountVowels1(str){
    let count1 = 0;
    
    for ( let letter of str.toLowerCase()){
        if(Vowels1.includes(letter))
        count1++;
    }
    return count1;
}

const string = "Enter the value: ";
const result = CountVowels1(string);
console.log(result);