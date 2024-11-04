const express = require('express'); 
const {getProductDetails, getSaleReports, productSalesReport} = require('../controller/productcontroller');
const router = express.Router();

 router.get('/getProductDetails', getProductDetails)
 router.post('/getSalesReports', getSaleReports)
 router.post('/productSalesReport',productSalesReport)
  
 module.exports = router;