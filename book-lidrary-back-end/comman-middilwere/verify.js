const jwt = require("jsonwebtoken")

exports.requireAdmin=(req,res,next)=>{
    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1]
    const user = jwt.verify(token,"prabhakar")
    req.user=user 
    }else{
        return res.status(401).json({ message: "Authorization required" })
    }

    next()
}

exports.adminMiddilewere=(req,res,next)=>{
    if(req.user.role !=="admin"){
       return res.status(400).json({message:"you are not a admin only admin can post data"})
    }
    next()
}