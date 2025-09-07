const user = require("../models/user");
const validate = require("../utils/validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const register = async (req,res)=>{
    try{

        //validate the data;
        validate(req.body);
        const{firstName,emailId,password} = req.body;
        req.body.password = await bcrypt.hash(password, 10);

       
        // ye email id already  exists toh nahi karti mere system
        const user = await user.create(req.body);
         const token = jwt.sign({_id:user._id , emailId:emailId},process.env.JWT_KEY,{expiresIn: 60*60});
        res.cookie('token',token,{maxAge: 60*60*1000});
        res.status(201).send("user Registered Successfully");
    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}