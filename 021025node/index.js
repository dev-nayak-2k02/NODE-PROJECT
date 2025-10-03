const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>Your'e in home page</h1>")
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server running at PORT:${PORT}`)
})