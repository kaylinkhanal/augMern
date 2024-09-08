/*  
//reduce method example (used for arrays only not  objects)
const arr = [4, 12, 53, 13, 14];

arr.reduce((initialValue, nextValues, nextIndex, originalArray) => {
  initialValue = initialValue + nextValues;
  return initialValue;
}, 0);
*/

const cartItems = [
  { id: 45, product: "hawkins", quantity: 3, price: 10 },
  { id: 42, product: "baltra cooker", quantity: 5, price: 20 },
  { id: 43, product: "phillips", quantity: 2, price: 10 },
  { id: 41, product: "nike shoes", quantity: 1, price: 20 },
];
//total price using reduce
let totalPrice = 0;
//Solution using map
cartItems.map((item) => {
  return console.log(
    "for id: " +
      item.id +
      ", total price=" +
      totalPrice +
      item.quantity * item.price +
      "\n\n"
  );
});
