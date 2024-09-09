const scores = {
    math: 53,
    science:50,
    computer: 54
  }
  //calculate the percentage using for in
  //full marks of each subject is 100
  
  let sum =0
  for(let item in scores){
    sum += scores[item]
  }
  
  const totalMakrs =Object.keys(scores).length*100
  const percentage =(sum/totalMakrs)*100
  parseFloat(percentage.toFixed(2))