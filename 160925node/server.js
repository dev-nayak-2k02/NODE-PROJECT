const express = require ('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Server created');
})
app.get('/about',(req,res)=>{
    res.send('this is about route');
})
app.post('/register',(req,res)=>{
    console.log(req.query);
    console.log(req.query.roll);
    if(req.query.roll == roll){
        console.log("i am ready");
        res.send('provided');
    } else {
        console.log("Roll number not given");
        res.send("i am unable to get your roll");
    }
})
app.post('/search/:id',(req,res)=>{
    console.log(req.params);
    res.send("params and query params");
})
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log('server created and is running');
})