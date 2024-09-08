const obj = {
  name: "ram",
};
obj.name = obj.name[0].toUpperCase() + obj.name[0].slice(1)

//Q1 write some code here:
// output should be
//
// {
//     name: 'Ram'
// }
let objName = obj.name[0].toUpperCase() + obj.name.slice(1);
console.log(objName);
const newObj = {
<<<<<<< HEAD
  name: "gopal",
};
=======
    name:'gopal'
}
const output = {...obj, ...newObj}

>>>>>>> d7147ec0d0acc51f1c28464198ce749eb372abf9
//Q2 output:

// ['ram','gopal']
const output = [obj.name, newObj.name];
console.log(output);
