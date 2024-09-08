const array = [3, 5, 2];

//Q1)--------------------------------------------------
//expected output:10
let sum = 0;
array.forEach((item, id) => {
  sum += item;
  return sum;
});
console.log(sum);
//--------------------------------------------------------

// Q2) ---------------------------------------------------
// expected output: [4,6,2]

const x = array.map((item) => {
  if (item % 2 === 0) {
    return item;
  } else {
    return (item += 1);
  }
});
console.log(x);
//----------------------------------------------------------------
//Q3)------------------------------------------------------------------
// expected output: [13,15]
let output = array.map((item) => {
  if (item > 2) {
    return (item = item + 10);
  }
});
//console.log(output);
finalOutput = output.filter((item) => {
  if (item !== undefined) {
    return item;
  }
});
console.log(finalOutput);
