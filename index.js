const express = require("express")
const fs = require('fs')


const app = express()
app.use(express.json())
const Meths = JSON.parse(
    fs.readFileSync(`${__dirname}/data/paroahs.json`)
)

app.get("/api/v1/Meths",(req,res)=>{
    res.status(200).json({
        status:'success',
        results: Meths.length,
        data:{
            Meths
        } 
    
    })
    console.log(req.body)
})

const port = 3000
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})