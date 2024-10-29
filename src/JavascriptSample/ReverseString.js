const arr = [4,5,3,7,2,9];

//use reverse() order of element in array

arr.reverse();
console.log(arr);

// use sort arrange the elements ascending order 

arr.sort();
console.log(arr);

//use sort() with specific criteria to arrage array element 

arr.sort((a,b) => b-a);
console.log(arr);
