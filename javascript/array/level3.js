const array = [3,5,2]

//Q1) expected output 
//10
let sum = 0
array.forEach((item,id)=>{
    sum = sum + item;
});
console.log(sum);

// Q2) expected output 
// increase by one if odd
const output = array.map((item,id)=>{
   if(item%2 ===1 ) item = item + 1
   return item
})
console.log(output);

                    


//Q3) expected output:
// [13,15]


const result = array.map((item)=>{
  return item + 10
})
result.filter((item)=>{
if(item%2==1)
  return item
})


// const result = array.map((item)=>{
//   return item + 10
// })
// result.filter((item)=>{
// if(item%2==1)
//   return item
// })
// console.log(result);


// const output = array.map(item=>item+10)
// output.filter(item=> item%2==1)