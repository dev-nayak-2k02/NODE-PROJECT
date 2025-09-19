const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('get method is created to get data from server');
});

app.post('/about',(req,res)=>{
    res.send('A post method is created');
    console.log('ok working');
});

app.post('/register',(req,res)=>{
    
    console.log(req.query.name);
    if(req.query.roll == 102){
        console.log(req.query.roll);
        console.log(req.query);
        res.send('&correct');
    }else {
        console.log(req.query.roll);
        res.send('&incorrect');
    }
    // res.send("/***/");
});

app.post('/search/:id',(req,res)=>{
    console.log(req.params);
    console.log(req.params.id);
    res.send('working search param');
});

PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is created and is running at PORT: ${PORT}`);
});