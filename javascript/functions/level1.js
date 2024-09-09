const name = "hello";
function test() {
  return name;
}

//Q1 convert to arrow function
const test1 = () => {
  return name;
};
console.log(name);
//Q2 pass name as argument instead of external constants
const test2 = (greetings) => {
  return greetings;
};
console.log(test2("Namaste"))