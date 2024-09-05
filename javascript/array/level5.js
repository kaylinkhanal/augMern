const arr = ['ram','shyam', 'gopal']

const user = {
    'ram': 'thapa',
    'gopal': 'bhatta'
}

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const output = arr.map((item)=>{
  if (user[item]){
    return item.charAt(0).toUpperCase() + item.slice(1) +" " + user[item].charAt(0).toUpperCase() + user[item].slice(1) 
  }
  else{
    return item.charAt(0).toUpperCase() + item.slice(1)
  }
})


console.log(output)