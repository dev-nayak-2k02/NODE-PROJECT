const express = require('express')
const app = express() 

app.use("/api/v1",require("./routes"))

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`server is running at PORT: ${PORT}`)
})