const user = {
    name :'ram',
    math:30,
    science:40,
    gk:40,
}
userSum = 0;
for(let i in user) {
    if(typeof user[i] === "number") {
        userSum += user[i];
    }
}
console.log(userSum);
//Q1
//hint: get only [30,40, 40 ] first
// add all items to sum
//expected output : 110





