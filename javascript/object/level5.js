

const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }


const output = Object.keys(userDetails).filter((item)=>{
  if(item !== 'name'){
    return item
  }
})
const codes = output.map((item)=>{
  return item[0].toUpperCase()
})


const scores = output.map((marks)=>{
  return userDetails[marks]
})


const newObj ={}
userDetails[name]
newObj.userName =userDetails.name
newObj.subjectCodes =codes
newObj.subjectScores =scores

newObj



