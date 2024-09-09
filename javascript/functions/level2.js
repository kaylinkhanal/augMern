const cholocateCounter = (quantity, price) => {
  const totalPrice = quantity * price;
  if (totalPrice > 100) {
    return `Hi, please pay Rs, ${totalPrice}`;
  } else {
    return `Sorry, order less than of rs 100 is not allowed`;
  }
};
const price = cholocateCounter(3, 50);
console.log(price);
//Q1
//expected output is 'Hi, please pay Rs.150'

//Q2
//if 1,50 is passed instead of 3,50 expected output is 'Sorry, order less than of rs
// 100 is not allowed '
