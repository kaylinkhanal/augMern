const obj = {
    name: 'ram'
}
//Q1 write some code here:
// output should be
// { name: 'Ram' }

Object.keys(obj).forEach((item)=>{
  if(item == "name"){
    obj[item] = obj[item][0].toUpperCase() + obj[item].slice(1)
  }
})
obj


const newObj = {
    name:'gopal'
}
//Q2 output:
// ['ram','gopal']

function addName(firstObj,secondObj) {
  return [firstObj.name,secondObj.name]
}

addName(obj,newObj)
