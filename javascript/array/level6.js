const config = {
  practical: {
    passMarks: 30,
    fullMarks: 50,
  },
  theory: {
    passMarks: 40,
    fullMarks: 100,
  },
};

const scores = {
  math: {
    type: "theory",
    score: 60,
  },
  science: {
    type: "theory",
    score: 20,
  },
  computer: {
    type: "theory",
    score: 30,
  },
  lab: {
    type: "practical",
    score: 20,
  },
};

//no of subjects the student has failed
// let count = 0;
// for (const [key, value] of Object.entries(scores)) {
//   if (value.score < config[value.type].passMarks) {
//     count++;
//   }
// }
// console.log(count);
let count = 0;
Object.entries(scores).forEach(([key, value]) => {
  if (value.score < config[value.type].passMarks) {
    count++;
  }
});
console.log(count);

//calculate the percentage of the student
// let sum = 0;
// for (const [key, value] of Object.entries(scores)) {
//   sum += value.score;
// }
// console.log((sum / 350) * 100);
let sum = 0;
Object.entries(scores).forEach(([key, value]) => {
  sum += value.score;
});
console.log((sum / 350) * 100);
