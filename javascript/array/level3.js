const array = [3, 5, 2];

//Q1) expected output
//10
let sum = 0;
array.forEach((item) => {
  sum += item;
});
console.log(sum);

// Q2) expected output
// [4,6,2]
const output = array.map((item, id) => {
  if (item % 2 === 1) {
    item = item + 1;
  }
  return item;
});
console.log(output);

//Q3) expected output:
// [13,15]

// console.log(array);
