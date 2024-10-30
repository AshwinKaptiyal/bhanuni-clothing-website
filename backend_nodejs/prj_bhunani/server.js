const app = require('./app');
const http = require('http');
const dotEnv = require('dotenv');
const dbConnect = require('./db/dbconnector');
dotEnv.config({path:'./config/.env'})
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log('PORT RUNNING',PORT);
    dbConnect.dbConnect();
    dbConnect.dbtest();
    
})