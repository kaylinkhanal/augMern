const scores = {
    math: 53,
    science:50,
    computer: 54
  }
  //calculate the percentage using for in
  //full marks of each subject is 100
  
  let sum = 0
  let totalSub = 0
  for(let item in scores){
    //console.log(scores[item])
    sum = sum + scores[item]
    totalSub++
  }
//console.log(sum);
const percentage = sum/(totalSub*100)*100
percentage.toFixed(2)
