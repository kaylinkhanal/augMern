const scores = {
  math: 53,
  science:50,
  computer: 54
}
//calculate the percentage using for in
//full marks of each subject is 100
let sum = 0
let number = 0 
for(let item in scores){
  sum = sum + scores[item]
  number +=1
}
const percentage = sum/number*100*100
console.log(percentage)