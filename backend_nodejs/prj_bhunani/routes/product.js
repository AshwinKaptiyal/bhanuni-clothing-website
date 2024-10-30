const express = require('express'); 
const {getProductDetails, getSaleReports} = require('../controller/productcontroller');
const router = express.Router();

 router.get('/getProductDetails', getProductDetails)
 router.post('/getSalesReports', getSaleReports)
  
 module.exports = router;