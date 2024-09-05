const arr = [2, 5, 6, 7];
//calculate the sum of the array using either for of or for in
let sum = 0;
for (let item of arr) {
  sum = sum + item;
}
console.log(sum);




//high level
const users = ["hari", "shyam", "hari"];
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
let uniqueUser = [];
users.forEach((item) => {
  if (!uniqueUser.includes(item)) {
    uniqueUser.push(item);
  }
});
console.log(uniqueUser);




const newArr = [
  [4, 5],
  [5, 7],
  [7, 2],
];
//calculate the sum of all the odd numbers inside this nested array
const wholeArray = newArr.flat();
let newSum = [];
let totalSum = 0;
wholeArray.forEach((item) => {
  if (item % 2 !== 0) {
    newSum.push(item);
  }
});
newSum.forEach((item) => {
  totalSum = totalSum + item;
});
console.log(totalSum);




const myDetails = [
  { id: 3, name: "hari" },
  { id: 5, name: "shyam" },
  { id: 6, name: "gopal" },
];
// return only array of ids: expected output  [3,5,6]
const newDetail = myDetails.map((item) => {
  return Object.values(item);
});
const onlyId = newDetail.flat();
const output = onlyId.filter((item) => {
  if (typeof item === "number") {
    return item;
  }
});
console.log(output);




const userDetails = [
  { score: 0, name: "hari", marks: [10, 3, 23] },
  { score: 0, name: "shyam", marks: [50, 23, 23] },
  { score: 0, name: "shyam", marks: [20, 13, 43] },
];
//loop over the arr of objects and calculate total score, expected output is:
userDetails.forEach((item) => {
  let totalScore = 0;
   for (let i = 0; i < item.marks.length; i++){
     totalScore = totalScore + item.marks[i];
   }
  item.score = totalScore;
})
console.log(userDetails)

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
// ]
