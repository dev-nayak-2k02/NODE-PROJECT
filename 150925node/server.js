const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Server created');
});
app.get('/about',(req,res)=>{
    res.send('we are now in about page');
});
app.post('/register',(req,res)=>{
    res.send('sever posting');
})
const PORT = 8000;
app.listen(PORT, 
    ()=>{console.log('created server is running');
});