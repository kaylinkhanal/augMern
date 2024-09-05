const arr = ['ram','shyam', 'gopal']

const user = {
    'ram': 'thapa',
    'gopal': 'bhatta'
}

// expectedOUTPUT:
// ['ram thapa', 'shyam', 'gopal bhatta']

    // hint: user['ram']


    const output = arr.map((item)=>{
        console.log(item)
      console.log(user[item])
      if (user[item]){
        return item + ' ' + user[item]
      }else{
        return item
      }
      
    })
    
    console.log(output)
    