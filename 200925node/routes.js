const express = require('express')
const { homeController, aboutController, productController} = require('./controller')

const route = express.Router()

route.get('/',homeController)
route.get('/about',aboutController)
route.get('/product',productController)

module.exports = route