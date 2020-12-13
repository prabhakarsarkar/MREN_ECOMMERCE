const express = require("express");
const { signupValidationRequest, isValidation, loginValidationRequest } = require("../validator/auth");
const { userSignup, UserLogin}=require("../controller/auth")
const router = express.Router();



router.post('/signup/user',signupValidationRequest,isValidation,userSignup)
router.post('/login/user',loginValidationRequest,isValidation,UserLogin)



module.exports= router;