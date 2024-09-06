const userDetails = {
   ram: {
    nationality: 'nepal'
},
stephan: {
    nationality: 'USA'
}
}

const country ={
    nepal: 'kathmandu',
    USA: 'washington DC'
}


// Output should be [['ram', 'kathmandu'], ['stephan','washington DC']]
// const newArr = Object.entries(userDetails)
// const valr = newArr[0][1]['nationality']
// newArr
// valr
// country[valr]
// newArr[0][0]

Object.entries(userDetails).map((item)=>{
    return [item[0],country[item[1]['nationality']]]
  })