const express = require('express')
const {homeController, aboutController, productController, searchController} = require('./controller')
const app = express()

app.get('/',homeController)
app.get('/about',aboutController)
app.get('/product',productController)
app.get('/search/:id', searchController)
 
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Sever is running in PORT: ${PORT}`);
})