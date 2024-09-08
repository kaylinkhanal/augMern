const obj = {
    name: 'ram'
}
obj.name = obj.name[0].toUpperCase() + obj.name[0].slice(1)

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
const output = {...obj, ...newObj}

//Q2 output:

// ['ram','gopal']

function addName(firstObj,secondObj) {
  return [firstObj.name,secondObj.name]
}

addName(obj,newObj)
