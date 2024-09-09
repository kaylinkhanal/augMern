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


const output = Object.keys(userDetails).filter((item) => {
    if(item !== 'name') {
      return item
    }
  })
  output
  
  output.map((item) => {
    return item[0].toUpperCase()
  })
  output.map((value) => {
    return userDetails[value]
  })