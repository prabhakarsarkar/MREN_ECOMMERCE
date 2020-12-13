import { UserConstants } from "../Constants"
import axios from '../../axiosInstance/axios'

export const getUserDetailes = ()=>{
    return  dispatch=>{
         axios.get("/get/user")
         .then((res)=>{
            dispatch({
                type:UserConstants.GET_USER_SECCESS,
                payload:res.data.data
            })
         })
        
         .catch((err)=>{
            dispatch({
                type:UserConstants.GET_USER_FAILURE,
                payload:err
            })
         })

    }
}
