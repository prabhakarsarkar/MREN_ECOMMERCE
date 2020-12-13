const mongose = require("mongoose");

const userSchema = new mongose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20

    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
  
    


},{timestamps:true})

module.exports= mongose.model("user",userSchema)