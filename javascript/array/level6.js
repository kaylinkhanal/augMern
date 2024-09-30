const config = {
    practical: {
        passMarks: 30,
        fullMarks: 50
    },
    theory: {
        passMarks: 40,
        fullMarks: 100
    },
}

const scores = {
   math: {
    type: 'theory',
    score: 60
   },
   science: {
    type: 'theory',
    score: 20
   },
   computer: {
    type: 'theory',
    score: 30
   },
   lab:{
    type: 'practical',
    score: 20
   },
}
let number = 0
Object.entries(scores).forEach(([subject, other])=>{
  if (other.type === 'theory' && other.score < config.theory.passMarks ){
    number +=1
  }
  if (other.type === 'practical' && other.score < config.practical.passMarks ){
    number = number + 1
  }
});
console.log(number)
//no of subjects the student has failed
