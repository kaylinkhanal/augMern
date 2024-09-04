const array = [3,5,2]

//Q1) expected output 
//10
let sum = 0;
array.forEach((nums) => {
  sum += nums;
});

// Q2) expected output 
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

console.log(array)