const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const uploadController = require("./controllers/uploadController");
const tiffinController = require("./controllers/tiffinController");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors());
app.use("/images",express.static("public/images"));

app.use("/auth",authController);
app.use("/upload",uploadController);
app.use("/tiffin",tiffinController);

mongoose.connect(process.env.Mongo_url).then(()=>console.log("database connected")).catch((error)=>console.log(error));

app.get("/",(req,res)=>res.sendFile(__dirname+"/index.html"));
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.listen(process.env.Port,()=>console.log("server started!"));