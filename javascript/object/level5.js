
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
const userName = userDetails.name;
const subject_arr = Object.keys(userDetails).filter(items=> items!== 'name')
 .map((items)=>items.charAt(0).toUpperCase())
marks_arr = Object.values(userDetails).filter((items)=>{
  if (typeof items === 'number'){
    return items
}
})

const output = {userName: userName, subjectCodes: subject_arr, subjectScores: marks_arr}
console.log(output)