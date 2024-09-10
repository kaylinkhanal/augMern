const arr = [2, 5, 6, 7];
//Q1--------------------------
//calculate the sum of the array using either for of or for in
let sumArr = 0;
for (let i in arr) {
	console.log(arr[i]);
	sumArr = sumArr + arr[i];
}
console.log(sumArr);
//Q2---------------------------------
//high level
const users = ["hari", "shyam", "hari"];
//hint: how to know hari was already there in users array
//hint2: how to remove particular index/item
//remove from array if duplicate
let a = "";
let uniqueNames = users.filter((item, index, self) => {
	//console.log(item, index, self);
	//console.log(self.indexOf(item) === index);
	if (self.indexOf(item) === index) {
		return item;
	}
});

console.log(uniqueNames);

//Q3----------------------------------------------------------

const newArr = [
	[4, 5],
	[5, 7],
	[7, 2],
];
let sumNewArr = 0;
newArr.forEach((item, index) => {
	console.log(item, index);
	item.forEach((val) => {
		console.log(val);
		if (val % 2 == 1) {
			sumNewArr = sumNewArr + val;
		}
		//console.log(sumNewArr);
	});
});

console.log(sumNewArr);

//Q3-------------------------------------
//calculate the sum of all the odd numbers inside this nested array

const myDetails = [
	{ id: 3, name: "hari" },
	{ id: 5, name: "shyam" },
	{ id: 6, name: "gopal" },
];

// return only array of ids: expected output  [3,5,6]

filterItem = myDetails.map((item, index) => {
	console.log(item, index);
	//console.log(Object.entries(item));
	return item.id;
});
console.log(filterItem);



//Q4------------------------------------------------
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


userDetails.map((item,index)=>{
console.log(item,index);
console.log(item.score)
item.marks.map((m,i)=>{
  console.log(m);
  item.score=item.score+m;
})
console.log(item.score)
})
console.log(userDetails)