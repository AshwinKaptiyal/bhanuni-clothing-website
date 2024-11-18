const express = require('express'); 
const {getProductDetails, getSaleReports, productSalesReport, clientCheckoutDetails, getReports} = require('../controller/productcontroller');
const router = express.Router();

 router.get('/getProductDetails', getProductDetails)
 router.post('/getSalesReports', getSaleReports)
 router.post('/productSalesReport',productSalesReport)
 router.post('/clientCheckoutDetails',clientCheckoutDetails)
 router.get('/getReports',getReports)
  
 module.exports = router;