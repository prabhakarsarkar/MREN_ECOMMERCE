const ProductDB = require("../databaseModal/productModal")
exports.addProduct =async (req,res)=>{
    console.log(req.user);
    
    const {name,quantity,price,rom_ram,battery,display,camera,image,description,category,processor}=req.body;

    const product =await new ProductDB({
        name,   
        quantity,
        price,
        rom_ram,
        battery,
        display,
        camera,
        processor,
        image,
        description,
        category,
        createBy:req.user.firstName
    })

    product.save((err,data)=>{

        if(err){    
            console.log("errrrrr");
            return res.status (404).json({error:err})
        }
        else{
            return res.status(200).json({data:data})
        }

    })

    
}


exports.getProduct= async(req,res)=>{
    const data= await ProductDB.find({})
     .populate({path:'category', select:'Name'})
     .exec();
     return res.status(200).json({data})
 }

exports.deleteProduct= async(req,res)=>{
       await ProductDB.findByIdAndDelete({_id:req.params.id})
        .then((data1)=>{
            res.status(200).json({data1})
        })
        .catch((err)=>{
            res.status(404).json({error:err})
        })
}


exports.getProductByCategory= async(req,res)=>{
    // console.log(req.params.id);

        await ProductDB.find({category:req.params.id})
        .exec((error,data)=>{
            if(error) return res.send({errors:error})
            if(data){
                res.send({data})
            }
        })
}


exports.getProductByLimit=(req,res)=>{
    ProductDB.find({category:req.params.id})
    .limit(1)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })

}


