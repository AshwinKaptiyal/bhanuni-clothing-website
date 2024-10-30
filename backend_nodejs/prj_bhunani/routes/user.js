const express = require('express');
const { getUser, setUser1 } = require('../controller/usercontroller');
 
const router = express.Router();

 router.route('/getuser').get(getUser).post(setUser1)
 //router.route('/getuser').post(setUser1);
 router.get('/getuser',getUser) ; 
 

  
 module.exports = router;