const User = require("../databaseModal/userModal")
const jwt = require('jsonwebtoken')
exports.userSignup= async (req,res) =>{
  await User.find({email:req.body.email})
    .exec(async(err,user)=>{
        if(user.length==1){
           return res.status(200).json({messgess:"user is all reday signp"})
        }
        const {firstName,lastName,email,password,phoneNumber}=req.body
        // console.log(user);
        const userData= await new User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        })
        userData.save((err,data)=>{
            if(err){
               return res.status(404).json(err,"dfghjklll;;")
            }
            else{
              return res.status(200).json({ message:"Admin created successfully"})
            }
        })
    })

}

exports.UserLogin=async(req,res)=>{
   await User.findOne({email:req.body.email})
    .exec((err,data)=>{
        if(data==null){
           return res.status(404).json({
                message:"frist do singup"
            })
        }else{
           
            if(data.password ==req.body.password){
                const token = jwt.sign({_id:data._id},"prabhakar")
                const {_id,firstName,lastName,email,role}=data
                res.status(200).json({
                    token,
                    user:{
                    _id,firstName,lastName,email,role
                    }
                })
            }
            else{
               return res.send("pass is wrong")
            }
        }
    })
}

