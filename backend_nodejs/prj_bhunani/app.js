var express = require('express'); 
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
var app = express();  
app.use(express.json());
app.use('/users',userRoute);
app.use('/products',productRoute);
app.get('/', function (req, res) {  
    res.send('Welcome to PRODUCTS POINT');  
 })
module.exports = app;