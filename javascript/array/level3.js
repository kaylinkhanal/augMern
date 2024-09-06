<<<<<<< HEAD
const array = [3, 5, 2];

//Q1) expected output
//10
let sum = 0;
array.forEach((item, id) => {
	sum += item;
	return sum;
});
console.log(sum);
// Q2) expected output
// [4,6,2]

const x = array.map((item) => {
	if (item % 2 === 0) {
		return item;
	} else {
		return (item += 1);
	}
});
console.log(x);

//Q3) expected output:
// [13,15]
=======
const array = [3,5,2]

//Q1) expected output 
let sum = 0
array.forEach((item,id)=>{
sum = sum + item
})
console.log(sum)
//10


// Q2) expected output 
// increase by one if odd
const output = array.map((item,id)=>{
   if(item%2 ===1 ) item = item + 1
   return item
})
console.log(output)
// [4,6,2]


//Q3) expected output:
// [13,15]

console.log(array)
>>>>>>> e4a54e3663610b4f0484a45f094f14d9495e8ac3
