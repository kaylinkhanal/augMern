const array = [3,5,3,5]
//Q1
//expected output is [5,3]
console.log(array.slice(1,3))

//Q2
//expected output is [5,3,5,3]
console.log(array.reverse())


//Q3
const newArr = [2,1]
//expected output is [5,3,5,3,2,1]
console.log([...array,...newArr])