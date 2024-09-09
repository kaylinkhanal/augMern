const userDetails = {
  name: "kaylin",
  maths: 23,
  science: 35,
  gk: 30,
};

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }
const output = Object.keys(userDetails).filter((item) => {
  if (item !== "name") {
    return item;
  }
});
const nameInitial = output.map((item) => {
  return item[0].toUpperCase();
});
console.log(nameInitial);

const marks = Object.entries(userDetails).filter((item) => {
  item[0] = item[0][0].toUpperCase();
  if (typeof item[1] === "number") return item;
});
console.log(output);
