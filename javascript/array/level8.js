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



const cartItems= [
    {id: 45, product:'hawkins', quantity:3, price:10},
    {id: 42, product:'baltra cooker', quantity:5, price:20},
    {id: 43, product:'phillips', quantity:2, price:10},
    {id: 41, product:'nike shoes', quantity:1, price:20},
]
//total price using reduce
const totalPrice = cartItems.reduce((acc, item) => {
  return acc = acc + (item.quantity * item.price);
}, 0)
console.log(totalPrice)