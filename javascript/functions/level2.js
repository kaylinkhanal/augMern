
const cholocateCounter = (quantity, price)=> {
    if(quantity*price <100){
        return "'Sorry, order less than of rs 100 is not allowed '"
    }else{
       return 'Hi, please pay Rs.'+ quantity*price
    }
}

const price = cholocateCounter(3, 50)
console.log(price)
//Q1
//expected output is 'Hi, please pay Rs.150'

//Q2
//if 1,50 is passed instead of 3,50 expected output is 'Sorry, order less than of rs
// 100 is not allowed '
