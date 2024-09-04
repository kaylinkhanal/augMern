const array = [3, 5, 2];

//Q1) expected output
//10
let sum = 0;
array.forEach((item, id) => {
  sum += item;
});
console.log(sum);

// Q2) expected output
// [4,6,2]
const output = array.map((item, id) => {
  if (item % 2 ===1) item = item +1
  return item
});
console.log(output);

//Q3) expected output:
// [13,15]

array.map((item)=>{
    return item +10
})
result.filter((item)=>{
    if (item%2!== 0){
        return item
    }

})
console.log(array);
