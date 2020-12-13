const mongoose = require("mongoose");

const cateSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    Description:{
        type:String,
        required:true,
        trim:true
    },
    imges:{
        type:String
    },  
    parentId:{
        type:String
    },
    createBy:{
      type:String,
      required:true 
    },
},{timestamps:true})

module.exports =mongoose.model("category",cateSchema)