const user = {
  name: "ram",
  math: 30,
  science: 40,
  gk: 40,
};

//Q1
//hint: get only [30,40, 40 ] first
// add all items to sum
//expected output : 110
delete user.name;

const array = [user.math, user.science, user.gk];
console.log(array)
let sum = 0;
const output = array.forEach((item) => {
  sum += item;
});
console.log(sum);
