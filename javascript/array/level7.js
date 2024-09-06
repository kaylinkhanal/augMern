<<<<<<< HEAD
//Q1---------------------------------------------------
const arr = [2, 5, 6, 7];
//calculate the sum of the array using either for of or for in

let sum = 0;
for (const val of arr) {
  sum += val;
}
//Final output-----------------------------------------------
console.log(sum);

//Q2----------------------------------------------------------
//high level
const users = ["hari", "shyam", "hari"];
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

//Final output------------------------------------------------
console.log(removeDuplicates(users));

//Q3------------------------------------------------------------
const newArr = [
  [4, 5],
  [5, 7],
  [7, 2],
];
//calculate the sum of all the odd numbers inside this nested array
arrSum = 0;
newArr.forEach((item, i) => {
  //console.log(item, i);

  item.forEach((v) => {
    if (v % 2 === 1) {
      arrSum = arrSum + v;
    }
  });
});

//Final output-----------------------------------------------
console.log(arrSum);

//Q4------------------------------------------------------------
const myDetails = [
  { id: 3, name: "hari" },
  { id: 5, name: "shyam" },
  { id: 6, name: "gopal" },
];

// Printing the property we want

// return only array of ids: expected output  [3,5,6]

let res = myDetails.map((item) => {
  return item.id;
});
//Final output-------------------------------------
console.log(res);

//Q5------------------------------------------------
const userDetails = [
  { score: 0, name: "hari", marks: [10, 3, 23] },
  { score: 0, name: "shyam", marks: [50, 23, 23] },
  { score: 0, name: "shyam", marks: [20, 13, 43] },
];
=======
const arr = [2,5,6,7]
//calculate the sum of the array using either for of or for in



//high level
const users =['hari', 'shyam', 'hari']
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate

const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array

const myDetails = [
    {id:3, name: 'hari'},
    {id:5, name: 'shyam'},
    {id:6, name: 'gopal'},
  ]
  
// return only array of ids: expected output  [3,5,6]


const userDetails= [
    {score: 0, name:'hari', marks: [10,3,23]},
    {score: 0, name:'shyam', marks: [50,23,23]},
    {score: 0, name:'shyam',marks: [20,13,43]},
]
>>>>>>> e4a54e3663610b4f0484a45f094f14d9495e8ac3
//loop over the arr of objects and calculate total score, expected output is:

// [
//     {score: 36, name:'hari', marks: [10,3,23]},
//     {score: 96, name:'shyam', marks: [50,23,23]},
//     {score: 76, name:'shyam',marks: [20,13,43]},
<<<<<<< HEAD
// ]
userDetails.map((item) => {
  //console.log(item.marks);
  itemSum = 0;
  item.marks.forEach((i) => {
    itemSum = itemSum + i;
    //console.log(itemSum);
  });
  return (item.score = itemSum);
});

//Final output-------------------------------------
console.log(userDetails);
=======
// ]
>>>>>>> e4a54e3663610b4f0484a45f094f14d9495e8ac3
