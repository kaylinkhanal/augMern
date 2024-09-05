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
let scoresArr = Object.keys(scores)
let failStudent = 0;
let passStudent = 0;

scoresArr.forEach((item)=>{
  let newType = scores[item].type;
  (config[newType].passMarks < scores[item].score)?  passStudent += 1: failStudent += 1
})
console.log(failStudent);
//avarage pecentage 

//sum of total makrs
let totalMarks = 0;
scoresArr.forEach((sub)=>{
  if(scores[sub].type === "theory"){
    totalMarks += config.theory.fullMarks
  }else{
    totalMarks += config.practical.fullMarks
  }
})

//sum  of all subject score
let userMarks = 0;

scoresArr.forEach((marks)=>{
  userMarks+=scores[marks].score
})
 // last average percentage of user

let avgPercent = (userMarks / totalMarks)*100;
parseFloat(avgPercent.toFixed(2))
