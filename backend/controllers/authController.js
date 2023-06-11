const authController = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");


authController.post("/register",async(req,res)=>{
    try{
        const isExisting = await User.findOne({email : req.body.email});

        if(isExisting){
            throw new Error("Already such email registerd!");
        }

        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = await User.create({...req.body, password : hashedPassword});

        const {password , ...others} = newUser._doc;
        const token = jwt.sign({id : newUser._id} ,process.env.JWT_SECRET,{expiresIn : '4h'})
        return res.status(201).json({others,token});

    }catch(error){
        return res.status(500).json(error.message);
    }
})


authController.post("/login",async(req,res)=>{
    // console.log(req.body);
    try {
         const isExisting = await User.findOne({email : req.body.email});

         if(!isExisting){
            throw new Error("wrong credentails! : Email");
         }

         const comparePass = await bcrypt.compare(req.body.password,isExisting.password);

         if(!comparePass){
            throw new Error("wrong password!");
         }

         const {password, ...others} = isExisting._doc;
         const token = jwt.sign({id : isExisting._id}, process.env.JWT_SECRET, {expiresIn : '4h'});
        res.status(200).json({others , token});

    } catch (error) {
        return res.status(500).json(error.message);
    }
})

module.exports = authController;
