const scores = {
  math: 53,
  science:50,
  computer: 54
}
//calculate the percentage using for in
//full marks of each subject is 100

let sum = 0
for(let item in scores){
  sum = sum + scores[item]
}
totalSubject = Object.keys(scores).length *100
const percentage = sum/totalSubject * 100
console.log(percentage.toFixed(2))