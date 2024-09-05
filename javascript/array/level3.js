const array = [3,5,2]

//Q1) expected output 
<<<<<<< HEAD

let sum = 0
array.forEach((item,id) => {
  sum += item;
});
=======
let sum = 0
array.forEach((item,id)=>{
sum = sum + item
})
console.log(sum)
>>>>>>> a7f89965727a8bc37fce19424f967de82912a326
//10


// Q2) expected output 
<<<<<<< HEAD
const output = array.map((item,id) => {
    if(item %2 === 1) item = item + 1;{
        return item;
       }
})
=======
// increase by one if odd
const output = array.map((item,id)=>{
   if(item%2 ===1 ) item = item + 1
   return item
})
console.log(output)
>>>>>>> a7f89965727a8bc37fce19424f967de82912a326
// [4,6,2]


//Q3) expected output:

const filteredArray = array.map((item,id) => {
    return item + 10;
})
filteredArray.filter((item,id) => {
  return item %2 !== 0;
})
// [13,15]

console.log(array)