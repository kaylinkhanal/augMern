const array = [3,5,2]

//Q1) expected output 
//10
let sum = 0
array.forEach((item)=> {
    sum = sum + item
})
console.log(sum)


// Q2) expected output 
// [4,6,2]
const output = array.map((item, id)=>{
    if (item%2 ==1){
        return item + 1
    }
  else{
    return item
  }
})
console.log(output)


//Q3) expected output:
// [13,15]
const newArr = array.map(items=>items + 10)
newArr.filter(items =>items % 2 == 1)
console.log(result)