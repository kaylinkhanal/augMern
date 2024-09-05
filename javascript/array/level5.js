const arr = ['ram','shyam', 'gopal']

const user = {
    'ram': 'thapa',
    'gopal': 'bhatta'
}

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']
const output =arr.map((item)=>{
    if(user[item]== undefined){
      return item
    }else{
      return item+ " " + user[item]
    }
  })
  
  console.log(output)