const scores = {
  math: 53,
  science: 50,
  computer: 54,
};
//calculate the percentage using for in
//full marks of each subject is 100
let sum = 0;
for (let item in scores) {
  sum = sum + scores[item];
  subjectNumber = Object.keys(scores).length;
}
console.log(sum);
const percentage = (sum / (subjectNumber * 100)) * 100;
console.log(Number(percentage.toFixed(2)));
