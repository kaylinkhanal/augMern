const config = {
    practical: {
        passMarks: 30,
        fullMarks: 50
    },
    theory: {
        passMarks: 40,
        fullMarks: 100
    },
}

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
//calculate percentage scored

const passMarksPractical = config.practical.passMarks;
const passMarksTheory = config.theory.passMarks;
const scoreEachSubject = Object.entries(scores);
const fullMarksPractical = config.practical.fullMarks;
const fullMarksTheory = config.theory.fullMarks;
let subjectFailed = 0;
let totalFullMarks = 0;

const totalScore = scoreEachSubject.map((item) => {
  return item[1].score
});
totalScore.forEach((score) => {
  if (score <= passMarksPractical && score <= passMarksTheory) {
    subjectFailed ++
  }
})
console.log(subjectFailed);

const totalMarks = scoreEachSubject.map((item) => {
  if (item[1].type === "theory") {
    return fullMarksTheory
  } else {
    return fullMarksPractical
  }
}).forEach((marks) => {
  totalFullMarks = totalFullMarks + marks
})

const percentageScored = totalScore.map((item) => {
  return Math.round((item/totalFullMarks * 100) * 100)/100
})
console.log(percentageScored)


