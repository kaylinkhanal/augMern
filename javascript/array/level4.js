const user = {
    name :'ram',
    math:30,
    science:40,
    gk:40,
}

const newOutput = Object.values(user)
let sum  = 0;
newOutput.filter((item) => {
  if (typeof item === 'number') {
    return item
  }
}).forEach((item) => {
  sum = sum + item
})
console.log(sum)


//Q1
//hint: get only [30,40, 40 ] first
// add all items to sum
//expected output : 110

