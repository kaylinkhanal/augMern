const name ="hello"
function test(){
    return name
}

//Q1 convert to arrow function
const test1=()=>{return name}
console.log(test1());
//Q2 pass name as argument instead of external constants


const test2 = (valueName) => {
  return valueName;
};
console.log(test2("hello"));