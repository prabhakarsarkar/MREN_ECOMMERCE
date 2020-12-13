const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    quantity:{
        type:Number,
        
    },
    dist:{
        type:String,
        required:true,
        trim:true,
        lowercase:true

        
    },
    address:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    phoneProduct:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"phoneProduct",
        required:true
    },

},{timestamps:true})

module.exports= mongoose.model("order",ordersSchema)