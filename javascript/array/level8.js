const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'mango', 'pineapple', 'pineapple'];
//expected output ['apple: 2', 'banana: 3', 'orange: 1'];

let fruitCategory = [];
fruits.forEach(item => {
  if (fruitCategory[item]) {
    fruitCategory[item]++
  } else {
    fruitCategory[item] = 1
  }
});
console.log(fruitCategory)
