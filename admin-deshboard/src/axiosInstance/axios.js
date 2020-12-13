import axios from 'axios'
const token = window.localStorage.getItem("token")
const axiosInstance= axios.create({
    baseURL:"http://localhost:2000",
    headers:{
        'Authorization': token ? `Bearer ${token}`:''
    } 

})


export default axiosInstance;




// }else if (auth.loginError.includes("password must be at least 6 character")){
//     setloginErrfor_pass(auth.loginError)
//     setloginErrfor_pass('')
// }else{
//     console.log("okoookkkkk");
//     setNot_login_user_err(auth.loginError)
//     setNot_login_user_err('')
// }