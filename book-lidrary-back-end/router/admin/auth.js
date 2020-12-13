const express = require("express");
const { adminLogin, adminSignup, signout, getUserDetails } = require("../../controller/admin/auth");
const {  signupValidationRequest,isValidation, loginValidationRequest } = require("../../validator/auth");
const router = express.Router();
router.post("/signup/admin",signupValidationRequest,isValidation,adminSignup)
router.post("/login/admin",loginValidationRequest,isValidation,adminLogin)
router.post("/signout/admin",signout)
router.get("/get/user",getUserDetails)


module.exports = router;