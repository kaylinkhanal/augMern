const cholocateCounter = (quantity, price) => {};

const price = cholocateCounter(3, 50);

//Q1----------------------------------------------------
//expected output is 'Hi, please pay Rs.150'

const cholocateCounter1 = (quantity, price) => {
  return "Hi, please pay Rs." + quantity * price;
};
console.log(cholocateCounter1(3, 50));

//Q2----------------------------------------------------
//if 1,50 is passed instead of 3,50 expected output is 'Sorry, order less than of rs
// 100 is not allowed '

const cholocateCounter2 = (quantity, price) => {
  totalPrice2 = quantity * price;
  console.log(totalPrice2);
  if (totalPrice2 < 150) {
    return "Sorry, order less than of rs 100 is not allowed";
  }
};
console.log(cholocateCounter2(1, 50));
