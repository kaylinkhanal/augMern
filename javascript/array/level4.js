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
const scores = [user.math, user.science, user.gk];
const sum = scores.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
