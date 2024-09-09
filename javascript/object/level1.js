const obj = {
  name: "ram",
};

//Q1 write some code here:
// output should be
//
// {
//     name: 'Ram'
// }
//solution--------------------------------------
let output = Object.entries(obj).map((item) => {
  let valueUpdated =
    item[1].charAt(0).toUpperCase() + item[1].slice(1).toLowerCase();
  return (obj.name = valueUpdated);
});
console.log(obj);
//---------------------------------------------------------
const newObj = {
  name: "gopal",
};
//Q2 output:
// ['ram','gopal']
obj.name = newObj.name;
console.log(obj);
