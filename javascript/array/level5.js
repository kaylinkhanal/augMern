const arr = ["ram", "shyam", "gopal"];

const user = {
  ram: "thapa",
  gopal: "bhatta",
};

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const outputArr = arr.map((item) => {
  if (user[item] === undefined) {
    return item.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
  } else
    return (
      item.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase()) +
      " " +
      user[item].toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())
    );
});

console.log(outputArr);
