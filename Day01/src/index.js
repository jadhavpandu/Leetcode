const express = require("express");
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');


app.use(express.json());  // parser 
app.use(cookieParser())
main()
.then(async ()=>{
app.listen(process.env.PORT, ()=>{
    console.log("server listening  at a port "+process.env.PORT);
   })
})

.catch(err=> console.log("error Occured:"+ process.env.PORT));