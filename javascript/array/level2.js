const array = [3,5,3,5]
//expected output is [5,3]
// let ans = array.splice(1,2)
// console.log(ans)
//Q1
//expected output is [5,3]

//Q2
//expected output is [5,3,5,3]
console.log(array.reverse())


//Q3
const newArr = [2,1]
//expected output is [5,3,5,3,2,1]
let  myArray = [...array,...newArr]
console.log(myArray)