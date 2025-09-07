const express = require("express");
const app = express();
require('dotenv').config();
app.listen(process.env.PORT, ()=>{
    console.log("server listening  at a port "+process.env.PORT);
})