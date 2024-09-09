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

Object.entries(userDetails).map((item, index) => {
  console.log(item);
  Object.entries(item).map((val, ind) => {
    console.log(val, ind);
    if (userDetails.index === nepal) return country.nepal;
    if (userDetails.index === USA) return country.USA;
  });
});
