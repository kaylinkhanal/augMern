<<<<<<< HEAD
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
=======
const arr = ['ram','shyam', 'gopal']

const user = {
    'ram': 'thapa',
    'gopal': 'bhatta'
}

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const output = arr.map((item)=>{
    // hint: user['ram']
})

console.log(output)
>>>>>>> e4a54e3663610b4f0484a45f094f14d9495e8ac3
