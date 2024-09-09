const cholocateCounter = (quantity, price) => {};

const price = cholocateCounter(3, 50);
console.log(price);
//Q1
//expected output is 'Hi, please pay Rs.150'
if (quantity * price < 100) {
  return "sorry order less than of rs 100 is not allowed";
} else {
  "hi please pay Rs." + quantity * price;
}
//Q2
//if 1,50 is passed instead of 3,50 expected output is 'Sorry, order less than of rs
// 100 is not allowed '
