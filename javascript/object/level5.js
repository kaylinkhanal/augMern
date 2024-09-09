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


const output=Object.keys(userDetails).filter(item=>{
  
  if(item!=='name'){
     return item
     }
})
console.log(output);

output.map((item)=>{
    return (console.log(item[0].toUpperCase())
            
);
})

const output2 = Object.entries(userDetails).filter((item,index) => {
  if (item !== "name") {
    console.log(item,index)
    return item[1]
  }
});
console.log(output2)