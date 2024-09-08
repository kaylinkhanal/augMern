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

//no of subjects the student has failed

// calculate percentage scored
let failedNum = 0
Object.entries(scores).map((item)=>{
const subName = item[0]
const subType = item[1].type
const subScore = item[1].score
if(subType== 'theory' && subScore < config.theory.passMarks){
  failedNum++
}
  else if(subType== 'practical' && subScore< config.theory.passMarks){
    failedNum++
  }
// console.log(subName);
})
failedNum;

