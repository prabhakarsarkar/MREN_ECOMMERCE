import { signupConstants } from "../Constants/index"
import axios from '../../axiosInstance/axios'

export const signupAction=(user)=>{
        return async dispatch=>{
            const res =await axios.post("/signup/admin",{...user})
            console.log(res.data.signupError,".............................");
            if(res.data.signupError !== true || res.data.signupError === undefined){
                dispatch({
                    type:signupConstants.SIGNUP_SECCESS,
                    payload:res.data.message
                })

            }
            else{
                dispatch({
                    type:signupConstants.SIGNUP_FAILURE,
                    payload:res.data.errors
                })
            }
        }
} 