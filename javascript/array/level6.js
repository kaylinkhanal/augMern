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

  for (const subject in scores) {
    const { type, score } = scores[subject];
    const { passMarks, fullMarks } = config[type];

    if (score < passMarks) {
      failedSubjects++;
    }

    totalScore += score;
    totalFullMarks += fullMarks;
  }

  const percentage = (totalScore / totalFullMarks) * 100;

  return { failedSubjects, percentage };
}

const result = calculateResults(scores);
console.log(`Failed Subjects: ${result.failedSubjects}`);
console.log(`Percentage Scored: ${result.percentage.toFixed(2)}%`);
