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

const userArr = Object.entries(userDetails)
userArr.map((item)=> {
    userNationality = item[1].nationality
    item[1] = country[userNationality]
})

// Output should be [['ram', 'kathmandu'], ['stephan','washington DC']]