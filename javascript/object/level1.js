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



const newObj = {
    name:'gopal'
}
//Q2 output:
// ['ram','gopal']

const output = [obj.name, newObj.name]


console.log(obj)