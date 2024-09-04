const array = [3,5,2]

//Q1) expected output 

let sum = 0
array.forEach((item,id) => {
  sum += item;
});
//10


// Q2) expected output 
const output = array.map((item,id) => {
    if(item %2 === 1) item = item + 1;{
        return item;
       }
})
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