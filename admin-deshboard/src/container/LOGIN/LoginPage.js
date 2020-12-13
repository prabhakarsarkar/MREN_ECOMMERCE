
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import AdminNavbar from '../../Compoents/Headers/AdminNavbar'
import { authAction } from '../../Redux/Actions'
import './login.css'


const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    console.log(auth.loginError, "aaaaaaaaaaaaaa");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginErr, setloginErr] = useState('')
    const [loginErrfor_pass, setloginErrfor_pass] = useState('')
    const [not_login_user_err, setNot_login_user_err] = useState('')

    useEffect(() => {
        if (auth.loginError.includes("email")) {
            console.log("jhfeerk");
            setloginErr(auth.loginError)
            setloginErrfor_pass('')
            setNot_login_user_err('')

        
    }else if (auth.loginError.includes("password")) {
        setloginErrfor_pass(auth.loginError)
        setloginErr('')
        setNot_login_user_err('')
    } else {
        console.log("okoookkkkk");
        setNot_login_user_err(auth.loginError)
        setloginErrfor_pass('')
        setloginErr('')
    }
}, [auth.loginError])




const postLoginData = () => {
    const data = {
        email,
        password
    }
    dispatch(authAction(data))
    setEmail('')
    setPassword('')
}
if(auth.authenticate){
    return <Redirect to={"/admin"}/>
}
return (    
    <div>
        <AdminNavbar />

        <div className='container'>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                <div className="col-lg-8 col-md-8 col-sm-18 col-12">
                    <div className="card" >

                        <div className="card-body ">
                            <h5 className="card-title text-center">ADMIN LOGIN PAGE</h5>
                            <form>
                                <div className="list-group">
                                   
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        className="form-control"
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                    <p style={{ color: "red" }}>{loginErr}</p>
                                    <br></br>
                                    <label>password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        className="form-control"
                                        placeholder="password"
                                        onChange={(e) => setPassword(e.target.value)}

                                    />
                                    <p style={{ color: "red" }}>{loginErrfor_pass}</p>
                                </div>
                                
                            </form>
                            <div className="text-center">
                                <button onClick={postLoginData} className="btn btn-primary btns">SUBMIT</button><br></br>
                                <a className="btn text-danger" href="/signup">create account</a>
                                <p className="text-center" style={{color:"red"}}>{not_login_user_err}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
)
}

export default Login
