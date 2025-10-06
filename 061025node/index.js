const express = require('express')
const { homeController, registerController, aboutController } = require('./controller')
const app = express()

app.get('/',homeController)

app.get('/register',registerController)

app.get('/about/:id',aboutController)

const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`Server is running at PORT:${PORT}`);
})