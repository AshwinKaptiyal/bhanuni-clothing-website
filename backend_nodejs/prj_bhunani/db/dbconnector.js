const mongoose = require('mongoose');
const mysql = require('mysql2');
/*const  dbConnect =async()=> {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017')
        console.log('DB CONNECTED');
    }
    catch (error){
        console.log(error.message);
    }
}*/

const db = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL host
    user: 'root',      // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'ecomm' // Replace with your MySQL database name
  });
  
  // Connect to the database
  db.connect((err) => {
    console.log("eeeee ",err)
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });

  db.query("select * from product", (err, result)=>{
   // console.log("Result ",result)

  })
/**/


const dbtest =()=>
{
    console.log('db test....')
}
const dbConnect=()=>{

}
module.exports = {dbConnect, dbtest, db};