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
//calculate percentage scored

function calculateResults(scores) {
  let failedSubjects = 0;
  let totalScore = 0;
  let totalFullMarks = 0;

  for (let subject in scores) {
    let subjectInfo = scores[subject];
    let type = subjectInfo.type;
    let score = subjectInfo.score;

    let passMarks = config[type].passMarks;
    let fullMarks = config[type].fullMarks;

    if (score < passMarks) {
      failedSubjects++;
    }

    totalScore += score;

    totalFullMarks += fullMarks;
  }

  let percentage = (totalScore / totalFullMarks) * 100;

  return {
    failedSubjects: failedSubjects,
    percentage: percentage,
  };
}

let result = calculateResults(scores);

console.log("Number of subjects failed: " + result.failedSubjects);
console.log("Total percentage scored: " + result.percentage.toFixed(2) + "%");
