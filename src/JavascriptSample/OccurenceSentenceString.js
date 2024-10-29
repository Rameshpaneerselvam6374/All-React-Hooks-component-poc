//using to the for loop method

let value = "hello world";
let result = {};

for(let i = 0; i<value.length; i++){
    let char = value.charAt(i);
    console.log(char);
    if(!result[char]){
        result[char]=1;
    }else{
        result[char]+=1;
    }
}

console.log("Occurence in string=",result);
