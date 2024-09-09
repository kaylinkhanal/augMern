const name ="hello"


//Q1 convert to arrow function
const test = () => {
    return name
}


//Q2 pass name as argument instead of external constants
const test3 = (firstName) => {
    return firstName;
}

console.log(test());
console.log(test3('navin'));