const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/userAuth")



app.use(express.json());  // parser 
app.use(cookieParser())
app.use('/user',authRouter);


main()
.then(async ()=>{
app.listen(process.env.PORT, ()=>{
    console.log("server listening  at a port "+process.env.PORT);
   })
  
})

.catch(err=> console.log("error Occured:"+ err.message)); 