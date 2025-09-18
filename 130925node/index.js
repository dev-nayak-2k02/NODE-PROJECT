const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Server Created');
});
app.get('/about',(req,res)=>{
    res.send('Welcome about page');
});
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Sever is running at port number:${PORT}`);
});
