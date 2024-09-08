const cartItems = [
  { id: 45, product: "hawkins", quantity: 3, price: 10 },
  { id: 42, product: "baltra cooker", quantity: 5, price: 20 },
  { id: 43, product: "phillips", quantity: 2, price: 10 },
  { id: 41, product: "nike shoes", quantity: 1, price: 20 },
];
//total price using reduce
let totalPrice = cartItems.reduce((acc, item) => {
  return (acc += item.quantity * item.price);
}, 0);
console.log(totalPrice);

// let withSubTotal = cartItems.map((item) => {
//   return { ...item, subTotal: item.quantity * item.price };
// });
// console.log(withSubTotal);
