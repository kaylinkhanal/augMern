const arr = ["ram", "shyam", "gopal"];

const user = {
  ram: "thapa",
  gopal: "bhatta",
};

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const output = arr.map((item) => {
  // hint: user['ram']
  if (typeof user[item] !== "undefined") {
    return item + " " + user[item];
  } else {
    return item;
  }
});

console.log(output);
