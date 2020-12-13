const express = require("express")
const app = express();
const cors =require("cors")

const db = require("./databaseConection/connection")

const adminSignupLogin=require("./router/admin/auth")
const userSignupLogin = require('./router/auth')
const categoryData = require("./router/category")
const productData = require("./router/product")
const orderDetailes = require("./router/orders")
app.use(cors())
app.use(express.json());

app.use("/",adminSignupLogin)
app.use('/',userSignupLogin)
app.use("/",categoryData)
app.use("/",productData)
app.use("/",orderDetailes)




app.listen(2000,()=>{
    console.log("server is wroking port 2000");
})