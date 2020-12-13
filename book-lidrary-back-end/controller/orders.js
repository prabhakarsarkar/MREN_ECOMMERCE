const Order = require('../databaseModal/ordersModal')

exports.orderProduct =async (req,res)=>{
    // console.log(req.user);
    console.log(req.body);
    
    const {Name,quantity,dist,address,mobile,pincode,phoneProduct}=req.body;

    const data =await new Order({
        Name,   
        quantity,
        dist,
        address,
        mobile,
        pincode,
        phoneProduct,
    })

    data.save((err,data)=>{
        if(err){
            return res.status (404).json({error:err})
        }
        else{
            console.log(data);
            return res.status(200).json({data:data})
        }
    })

    
}

exports.getOrderDetailes=(req,res)=>{
    let orderDetailes =[]
    Order.find({})
    .populate({path:"phoneProduct",select:" name price"})
    .then((data)=>{
        if(data.length>0){
            
           for(let i of data){
               if(i.quantity>0){
                     const userData ={
                         _id:i._id,
                         name:i.Name,
                         address:i.address,
                         dist:i.dist,
                         mobile:i.mobile,
                         pincode:i.pincode,
                         productName:i.phoneProduct.name,
                         price:i.phoneProduct.price,
                         quantity:i.quantity,
                         totalAmount:i.quantity*i.phoneProduct.price,
                     }
                     
                     orderDetailes.push(userData)
               }
               else{
                   console.log("we dont have no orders");
               }
           }
           return res.send(orderDetailes)
          
        }
        
    })


    .catch((err)=>{
        res.send(err)
    })
}


exports.deleteOrder = (req,res)=>{
        Order.findByIdAndDelete({_id:req.params.id})
         .then((data1)=>{
             res.status(200).json({data1})
         })
         .catch((err)=>{
             res.status(404).json({error:err})
         })
 
 
}