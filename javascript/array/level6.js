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

console.log(Object.entries(scores));
Object.entries(scores).map((item, index) => {
	console.log(item, index);
	if (item[1].type === "theory") {
		pm = config.theory.passMarks;
		console.log(pm);

		if (item[1].score >= pm) {
			console.log(item[1].score);
		}
	}
	//

	if (item[1].type === "practical") {
		pm = config.practical.passMarks;
		console.log(pm);
		if (item[1].score >= pm) {
			console.log(item[1].score);
		}
	}
});
