const express = require('express');
const app = express();

app.post('/search/:id',(req,res)=>{
    console.log(req.id)
    res.send('something happened')
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT:${PORT}`);
})