const obj = {
  name: "ram",
};

//Q1 write some code here:
// output should be
//
// {
//     name: 'Ram'
// }
let objName = obj.name[0].toUpperCase() + obj.name.slice(1);
console.log(objName);
const newObj = {
  name: "gopal",
};
//Q2 output:
// ['ram','gopal']
const output = [obj.name, newObj.name];
console.log(output);
