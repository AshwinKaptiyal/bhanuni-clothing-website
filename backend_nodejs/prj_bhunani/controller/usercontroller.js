const getUser = (req,res)=>{
    res.send('Welcome to getUser in userController.js'); 
}
const setUser1 = (req,res)=>{
    res.send('Welcome to setuser1'); 
}
const setUser2 = (req,res)=>{
    res.send('Welcome to setuser'); 
}
const productDetails = (req,res)=>{
    res.send("Product Details ----");
}
module.exports = {getUser,setUser1, setUser2}