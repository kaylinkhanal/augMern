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
    const user = item[0];
    const userNationality = (country[item[1].nationality]);
    return [user, userNationality]
});
console.log(userDetails);