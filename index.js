fetch("")
.then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res)
}).catch((error)=>console.log(error))