import  axios from  '../Axiso/axios'
export const addOrderAction =(data)=>{
    console.log(data,"LLLLLLLLLLLLLLLLLLLLL");
    return dispatch=>{  
    axios.post('/order',{...data})
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
    }
}