const array = [3,5,2]

//Q1) expected output 
let sum = 0
array.forEach((item,id)=>{
sum = sum + item
})
console.log(sum)

// Q2) expected output 
// increase by one if odd
const output = array.map((item,id)=>{
   if(item%2 ===1 ) item = item + 1
   return item
})
console.log(output)
// [4,6,2]
let newNums = [];
array.forEach((item) => {
  if (item % 2 === 0) {
    newNums = [...newNums, item];  
  } else {
    newNums = [...newNums, item + 1];  
  }
});

console.log(newNums);


//Q3) expected output:
// [13,15]
const firstStep= array.map((nums)=>{
  return nums+10
})

firstStep.filter((item)=>{
  if(item % 2 !==0) return item
})
