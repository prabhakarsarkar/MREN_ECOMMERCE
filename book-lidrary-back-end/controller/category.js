const category = require("../databaseModal/categoryModal")
const Category = require("../databaseModal/categoryModal")

// const craeteCategoris =(categories,parentId)=>{
//     let category;
//     let categoryList =[]
//     console.log(parentId);
//     if(parentId==undefined){
//         category=categories.filter(cate => cate.parentId==undefined)
        
//     }else{
//         category=categories.filter(cate => cate.parentId==parentId)
//         console.log(category);
//     }
//     for(let cat of category){
//         categoryList.push({
//             _id:cat._id,
//             name:cat.name,
//             children:craeteCategoris(categories,cat._id)
//         })
//     }
//     return categoryList
// }


exports.createCategory= (req,res)=>{
   const categoryObj = {
       Name:req.body.Name,
       Description:req.body.Description,
       imges:req.body.imges,
       createBy:req.user.firstName,
      

   }
   if(req.body.parentId){
       categoryObj.parentId=req.body.parentId
   }    

   const cat = new Category(categoryObj)
   cat.save((error,categories)=>{
       if(error)return res.status(400).json({error:error})

       if(categories){
           return res.status(200).json({categories})
       }
   })

}


exports.getCategory= (req,res)=>{
    Category.find({})
    .exec((error,categories)=>{
        if(error) return res.send({error})
        if(categories){
            res.send(categories)
            // const categoryList = craeteCategoris(categories)           
            // return res.status(200).json({categoryList})
        }
    }) 
}


exports.deleteCategory= (req,res)=>{
   Category.findByIdAndDelete({_id:req.params._id})
    .then(()=>{
        return res.status(200).json({message:"delete seccess"})
    })
    .catch((err)=>{
        return res.status(404).json(err)
    })

   
}


