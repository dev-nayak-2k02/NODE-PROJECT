const express = require('express');
const app = express();

app.post('/search/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('something happened')
})

app.get('/register',(req,res)=>{
    console.log(req.query)
    console.log(req.query.roll)
    res.send('something happened')
    Number(req.query.roll) == 101? res.send(`yes it is`) : res.send(`no it is not`)
})

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT:${PORT}`);
})