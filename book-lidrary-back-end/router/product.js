const express = require("express");
const { 

    addProduct, 
    getProduct, deleteProduct,
     getProductByCategory, 
     getProductByLimit 
     
} = require("../controller/product");

const { requireAdmin, adminMiddilewere } = require("../comman-middilwere/verify");
const router = express.Router();



router.post("/add/product",requireAdmin,adminMiddilewere,addProduct)
router.get("/get/product",getProduct)
router.delete("/delete/product/:id",requireAdmin,adminMiddilewere,deleteProduct)
router.get("/get/product/:id",getProductByCategory)
router.get("/get/product/limit/:id",getProductByLimit)



module.exports = router;