const user = {
    name :'ram',
    math:30,
    science:40,
    gk:40,
}

delete user.name
console.log(user)
const arr = Object.values(user)
let sum = 0
arr.forEach((items)=> sum + items)
console.log(sum)
//Q1
//hint: get only [30,40, 40 ] first
// add all items to sum
//expected output : 110

