
const cholocateCounter = (quantity, price)=> {
    const output = price * quantity
    if (output > 100){
      return `Please pay Rs. ${output}`
    }
    else{
      return 'Sorry, order less than of Rs 100 is not allowed '
    }
  
  }
  
  const price = cholocateCounter(1, 50)
  console.log(price)
  //Q1
  //expected output is 'Hi, please pay Rs.150'
  
  //Q2
  //if 1,50 is passed instead of 3,50 expected output is 'Sorry, order less 