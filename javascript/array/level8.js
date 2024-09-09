const cartItems= [
    {id: 45, product:'hawkins', quantity:3, price:10},
    {id: 42, product:'baltra cooker', quantity:5, price:20},
    {id: 43, product:'phillips', quantity:2, price:10},
    {id: 41, product:'nike shoes', quantity:1, price:20},
]
//total price using reduce

const totalSum = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
}, 0);

console.log(totalSum);
