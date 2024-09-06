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

// calculate percentage scored

let failedSubjectNumber = 0;
Object.entries(scores).forEach((item) => {
  const subjectName = item[0];
  const subjectType = item[1].type;
  const subjectScore = item[1].score;
  if (subjectType === 'theory' && subjectScore < config.theory.passMarks) {
    failedSubjectNumber ++
  } else if (subjectType === 'practical' && subjectScore < config.practical.passMarks) {
     failedSubjectNumber ++
  }
});
console.log(failedSubjectNumber);