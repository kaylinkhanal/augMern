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
obj.name = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);

const newObj = {
    name:'gopal'
}

//Q2 output:
// ['ram','gopal']


console.log(obj)