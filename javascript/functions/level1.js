function test() {
  return name;
}
console.log(name);

//Q1 convert to arrow function
test(() => {
  return name;
});
console.log(name);
//Q2 pass name as argument instead of external constants
const test(name)=>{return name}
test(name)