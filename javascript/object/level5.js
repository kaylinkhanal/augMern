const userDetails = {
	name: "kaylin",
	maths: 23,
	science: 35,
	gk: 30,
};

// {
//  Q1   userName: 'kaylin',
//  Q2   subjectCodes: ['M','S', 'G'],
//  Q3   subjectScores: [23,35,30]
// }

//Q1-------------------------------------
const res = Object.keys(userDetails).filter((item) => {
	if (item == "name") {
		return item;
	}
});
console.log(res);
console.log(userDetails[res]);
//Q2------------------------------------------------

const output = Object.keys(userDetails).filter((item) => {
	if (item !== "name") {
		return item;
	}
});
console.log(output);
output.map((item) => {
	return console.log(item[0].toUpperCase());
});

//Q3--------------------------------------------------
/*console.log(Object.entries(userDetails));

const output2 = Object.entries(userDetails).filter((item, index) => {
	//console.log(item);
	//console.log(item[1]);
	if (typeof item[1] !== "string") {
		//console.log(item[1]);
		//return console.log(item[1])
		console.log(item[1]);
		return item[1];
	}
});

*/

const outputx = output.map((item) => {
	return userDetails[item];
});
console.log(outputx);
