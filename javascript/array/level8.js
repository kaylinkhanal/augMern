const cartItems= [
    {id: 45, product:'hawkins', quantity:3, price:10},
    {id: 42, product:'baltra cooker', quantity:5, price:20},
    {id: 43, product:'phillips', quantity:2, price:10},
    {id: 41, product:'nike shoes', quantity:1, price:20},
]
//total price using reduce
// let sum = 0
// cartItems.forEach((items)=>{
//   sum = sum + (items.quantity * items.price)
// })
// sum
cartItems.reduce((sum, items )=>{
 return sum + (items.quantity * items.price)
}, 0)