const array = [2, 4, 5];
// calculate the length of an array
//expected output is 3
//const output = array.length;
//console.log(output);
let i = 0;
array.map(() => {
  i++;
});
console.log(i);
