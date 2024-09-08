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


Object.entries(userDetails).map((item) => {
    const user = item[0]
    const userNatinality = item[1].nationality 
    
    console.log(userNatinality)
    console.log(user)
    return  [user, country[userNatinality]]
  })
