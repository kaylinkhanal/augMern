const obj = {
  name: "ram",
};

//Q1 write some code here:
// output should be
//
// {
//     name: 'Ram'
// }
let name = obj.name[0].toUpperCase() + obj.name.slice(1);
console.log({ name });

const newObj = {
  name: "gopal",
};
const output = { ...obj, ...newObj };

//Q2 output:

// ['ram','gopal']
const result = [obj.name, newObj.name];
console.log(result);
