const obj = {
    name: 'ram'
}

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