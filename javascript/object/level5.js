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

const subjectCodes = Object.keys(userDetails).filter((item) => {
    if (item !== 'name') {
      return item
    }
  }).map((item) => {
    return item[0].toUpperCase()
  })
  
  const userName = userDetails.name;
  const subjectScores = Object.values(userDetails).filter((item) => {
    if (typeof item === 'number') {
      return item
    }
  })
  
  const output = {userName, subjectCodes, subjectScores};
  
  console.log(output)