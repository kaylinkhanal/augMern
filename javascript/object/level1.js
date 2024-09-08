const obj = {
    name: 'ram'
}
obj.name = obj.name[0].toUpperCase() + obj.name[0].slice(1)

//Q1 write some code here:
// output should be
//
// {
//     name: 'Ram'
// }
obj.name = obj.name[0].toUpperCase() + obj.name[0].slice(1)  + obj.name.slice(1)
console.log(obj)

const newObj = {
    name:'gopal'
}
const output = {...obj, ...newObj}

//Q2 output:

// ['ram','gopal']


console.log(obj)