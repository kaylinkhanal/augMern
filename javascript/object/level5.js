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

// const userName = userDetails.name;

// const output = Object.keys(userDetails).filter((item) => {
//   if (item !== "name") {
//     return item;
//   }
// });
// console.log(output);

// const subjectCodes = output.map((item) => {
//   return item[0].toUpperCase();
// });
// console.log(subjectCodes);

// const marks = Object.entries(userDetails).filter((item) => {
//   if (typeof item[1] === "number") return item;
// });
// console.log(marks);
// const subjectScores = marks.map((item) => {
//   return item[1];
// });
// console.log(subjectScores);

// const finalAnswer = { userName, subjectCodes, subjectScores };
// console.log(finalAnswer);

//below done by Kaylin Sir
const output = Object.entries(userDetails).filter((item) => {
  item[0] = item[0][0].toUpperCase();
  if (typeof item[1] === "number") {
    return item;
  }
});
console.log(output);

const final = Object.fromEntries(output);
const value = {
  userName: userDetails.name,
  subjectCodes: Object.keys(final),
  subjectScores: Object.values(final),
};
console.log(value);
