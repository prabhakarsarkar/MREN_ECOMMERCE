const mongoose = require("mongoose");

const url ="mongodb+srv://prabhakar:sarkar@cluster0.mui6f.mongodb.net/Book-Library?retryWrites=true&w=majority"

mongoose.connect(url,{
     useNewUrlParser: true ,
     useUnifiedTopology:true,
     useCreateIndex: true
})
.then(()=>{
    console.log("connect");
})
.catch((err)=>{
    console.log("databaseConnectionError");
})

