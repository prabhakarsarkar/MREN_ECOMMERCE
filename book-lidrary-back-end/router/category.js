const express = require("express");
const { requireAdmin, adminMiddilewere } = require("../comman-middilwere/verify");
const { createCategory, getCategory, deleteCategory } = require("../controller/category");
const router = express.Router();

router.post("/add/category",requireAdmin,adminMiddilewere,createCategory,)
router.get("/get/category",getCategory)
router.delete("/delete/category/:_id",requireAdmin,adminMiddilewere,deleteCategory)


module.exports=router;
    

