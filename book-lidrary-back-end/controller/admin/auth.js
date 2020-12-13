const User = require("../../databaseModal/userModal")
const jwt = require('jsonwebtoken')
exports.adminSignup= async (req,res) =>{
  await User.find({email:req.body.email})
    .exec(async(err,user)=>{
        if(user.length==1){
           return res.send({errors:"user is all reday signp",signupError:true})
        }
        const {firstName,lastName,email,password,phoneNumber}=req.body
        const userData= await new User({
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
            role:"admin",
           
        })
        userData.save((err,data)=>{
            if(err){
               return res.send({errors:err})
            }
            else{
              return res.send({ message:"Admin created successfully",signupError:false})
            }
        })
    })

}

exports.adminLogin=async(req,res)=>{
    const data = false
   await User.findOne({email:req.body.email})
  
    .exec((err,data)=>{
        if(data==null){
            res.send({errors:"you dont have a account",loginError:true}
            )
        }else{
           
            if(data.password ==req.body.password && data.role=="admin"){
                // console.log({firstName:data.firstName});
                const token = jwt.sign({_id:data._id,firstName:data.firstName,role:data.role},"prabhakar")
                const {_id,firstName,lastName,email,role}=data
                res.cookie("token",token)
                res.status(200).json({
                    token,
                    user:{
                    _id,firstName,lastName,email,role
                    }
                    
                })
            }
            else{
                res.send({errors:"password is wrong",loginError:true})
            }
        }
    })
}


exports.signout = (req,res)=>{
    res.clearCookie("token")
    return res.send({
        message:"signout seccess ......."
    })
}



exports.getUserDetails=(req,res)=>{
    User.find({})
    .exec((error,data)=>{
        if(error) return res.send({errors:error})
        if(data){
            res.send({data})
        }
     })
}