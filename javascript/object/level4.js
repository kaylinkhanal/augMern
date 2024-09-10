const userDetails = {
	ram: {
		nationality: "nepal",
	},
	stephan: {
		nationality: "USA",
	},
};

const country = {
	nepal: "kathmandu",
	USA: "washington DC",
};

// Output should be [['ram', 'kathmandu'], ['stephan','washington DC']]
console.log(Object.entries(userDetails));

finalOutput = Object.entries(userDetails).map((item, index) => {
	//console.log(item);

	if (item[1].nationality == "nepal") {
		//console.log([item[0],country.nepal]);
		return [item[0], country.nepal];
	}
	if (item[1].nationality === "USA") {
		//console.log([item[0],country.USA]);
		return [item[0], country.USA];
	}
});
console.log(finalOutput);
