const mongoose = require("mongoose");

const TiffinSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category:{
        type: String,
        enum: ["veg","non-veg"],
        required: true
    },
    img:{
        type: String,
        required: true
    },
     desc: {
        type: String,
        required: true,
        min: 50,
    },
    price: {
        type: Number,
        required: true
    },
    location : {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Tiffin",TiffinSchema );