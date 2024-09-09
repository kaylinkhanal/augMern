const scores = {
  math: 53,
  science: 50,
  computer: 54,
};
//calculate the percentage using for in
//full marks of each subject is 100

let obtainedMarks = 0;
let subjectCount = 0;
for (let item in scores) {
  //console.log(scores[item]);
  obtainedMarks = obtainedMarks + scores[item];

  subjectCount += 1;
}

let totalFullMarks = subjectCount * 100;
console.log(obtainedMarks);
const percentage = (obtainedMarks / totalFullMarks) * 100;
console.log(percentage);
