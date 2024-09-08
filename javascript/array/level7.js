const arr = [2, 5, 6, 7];
//calculate the sum of the array using either for of or for in

let sum = 0;
for (let x of arr) {
  sum = sum + x;
}
console.log(sum);

//high level
const users = ["hari", "shyam", "hari"];
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
function removeDuplicates(users) {
  return users.filter((item, index) => users.indexOf(item) === index);
}
console.log(removeDuplicates(users));

const newArr = [
  [4, 5],
  [5, 7],
  [7, 2],
];
//calculate the sum of all the odd numbers inside this nested array
let oddSum = 0;
const myArray = newArr.flat();
myArray.forEach((item) => {
  if (item % 2 == 1) {
    oddSum = oddSum + item;
  }
});
console.log(oddSum);

const myDetails = [
  { id: 3, name: "hari" },
  { id: 5, name: "shyam" },
  { id: 6, name: "gopal" },
];

// return only array of ids: expected output  [3,5,6]
let output = myDetails.map((item) => {
  return item.id;
});
console.log(output);
const userDetails = [
  { score: 0, name: "hari", marks: [10, 3, 23] },
  { score: 0, name: "shyam", marks: [50, 23, 23] },
  { score: 0, name: "shyam", marks: [20, 13, 43] },
];
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]

let result = userDetails.map((item) => {
  return { ...item, score: item.marks.reduce((acc, c) => acc + c, 0) };
});
console.log(result);
