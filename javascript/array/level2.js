const array = [3, 5, 3, 5];
//Q1
//expected output is [5,3]
console.log(array.slice(1, 3));
console.log(array.splice(1, 2));

const array1 = [3, 5, 3, 5];

//Q2
//expected output is [5,3,5,3]
console.log(array1.reverse());
const array2 = array1.reverse();

//Q3
const newArr = [2, 1];
//expected output is [5,3,5,3,2,1]

const merged = [...array2, ...newArr];
console.log(merged);
