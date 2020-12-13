import { authConstants } from "../Constants"
import axios from '../../axiosInstance/axios'

export const authAction = (data) => {
    const dispatch = async (dispatch) => {
        
        const res = await axios.post("/login/admin", { ...data })
        console.log(res.data.loginError, "llllllllllllllllllll");
        if (res.data.loginError !== true || res.data.loginError === undefined) {
            const { token, user } = res.data
            console.log(token, "token");
            localStorage.setItem("token", token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: authConstants.LOGIN_SECCESS,
                payload: {
                    user, token
                }

            })
        }
        else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: res.data
                }
            })
        }
    }
    return dispatch
}


export const checkLoginUser = () => {
    const dispatch = async (dispatch) => {
        const token =localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({
                type: authConstants.LOGIN_SECCESS,
                payload: {
                    user, token
                }
            })
        }
        else {
            dispatch({
                type: authConstants.USER_LOGIN_FAILURE,
                payload: {
                    error: "you need to login "
                }
            })
        }
    }
    return dispatch;
}



 
export const signOut = () => {
    const dispatch =async (dispatch) => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })
        const res = await axios.post("/signout/admin")
        if (res.status === 200) {
            window.localStorage.clear()
            dispatch({
                type: authConstants.LOGOUT_SECCESS,

            })
        }else{
            dispatch({
                type:authConstants.LOGOUT_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
    return dispatch
}

 


