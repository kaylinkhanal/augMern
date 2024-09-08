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
const answer = Object.entries(userDetails).map((item) => {
  const user = item[0];
  const userNationality = item[1].nationality;
  const output = [user, country[userNationality]];
  return output;
});
console.log(answer);
