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

//Q1-------no of subjects the student has failed----------------------

//Q2------- calculate percentage scored-------------------------------

//Q1--------------------------------------------
let theorySubjectFailedCount = 0;
let practicalSubjectFailedCount = 0;
let theorySubjectCount = 0;
let practicalSubjectCount = 0;
let totalScore = 0;

//console.log(Object.entries(scores));
Object.entries(scores).map((item, index) => {
	//console.log(item, index);
	if (item[1].type === "theory") {
		pm = config.theory.passMarks;
		//console.log(pm);

		if (item[1].score >= pm) {
			//console.log(item[1].score);
			totalScore = totalScore + item[1].score;
			theorySubjectCount++;
		} else {
			//console.log("fail");
			theorySubjectFailedCount++;
			totalScore = totalScore + item[1].score;
			theorySubjectCount++;
		}
	}

	//
	//console.log(pm)
	if (item[1].type === "practical") {
		pm = config.practical.passMarks;
		//console.log(pm);
		if (item[1].score >= pm) {
			console.log(item[1].score);
			totalScore = totalScore + item[1].score;
			practicalSubjectCount++;
		} else {
			//console.log("fail");
			totalScore = totalScore + item[1].score;
			practicalSubjectFailedCount++;
			practicalSubjectCount++;
		}
	}
});
//console.log(theorySubjectFailedCount, practicalSubjectFailedCount, totalScore);

let totalSubjectFailedCount =
	theorySubjectFailedCount + practicalSubjectFailedCount;
console.log(totalSubjectFailedCount);

//console.log(totalScore);
totalFullMarks = theorySubjectCount * 100 + practicalSubjectCount * 50;
//console.log(totalFullMarks);

const percentage = (totalScore / totalFullMarks) * 100;
console.log(percentage);
