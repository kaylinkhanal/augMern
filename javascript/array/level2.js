const array = [3, 5, 3, 5];
//Q1 expected output is [5,3]
//array.pop();
//const newArray = array.slice(1);
//console.log(newArray);

//-------------------------

//Q2 expected [5,3,5,3]
const arrayReversed = array.reverse();
//console.log(arrayReversed);

const newArray = [2, 1];

const arrayConcatenated = arrayReversed.concat(newArray);
console.log(arrayConcatenated);
