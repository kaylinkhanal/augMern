const array = [3,5,2]

//Q1) expected output 
let sum = 0
array.forEach((item,id)=>{
sum = sum + item
})
console.log(sum)
//10


// Q2) expected output 
// increase by one if odd
const output = array.map((item,id)=>{
   if(item%2 ===1 ) item = item + 1
   return item
})
console.log(output)
// [4,6,2]


//Q3) expected output:
// [13,15]

console.log(array)