import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AdminNavbar from '../../Compoents/Headers/AdminNavbar'
import { signupAction } from '../../Redux/Actions';

const Signup = () => {

    const dispatch = useDispatch();
    const signup = useSelector(state => state.signup)
    console.log(signup.signupErr, "................");

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [signupNameErr, setSignupNameErr] = useState('')
    const [signupnLastErr, setSignupnLastErr] = useState('')
    const [signupEmailErr, setSignupEmailErrr] = useState('')
    const [signupPasswordErr, setSignupPasswordErr] = useState('')
    const [signupMobileN0Err, setSignupMobileN0Err] = useState('')
    const [all_ready_user_signup, setAll_ready_user_signup] = useState('')

    useEffect(() => {
        console.log(signup.signupErr, "..........jjjjjjjjjjjjj......");
        if (signup.signupErr.includes("First")) {
            console.log(signup.signupErr, "signup.signupErr");
            setSignupNameErr(signup.signupErr)
            setSignupnLastErr('')
            setSignupEmailErrr('')
            setSignupPasswordErr('')
            setSignupMobileN0Err('')
            setAll_ready_user_signup('')

        } else if (signup.signupErr.includes("Last")) {
            setSignupnLastErr(signup.signupErr)
            setSignupNameErr('')
            setSignupEmailErrr('')
            setSignupPasswordErr('')
            setSignupMobileN0Err('')
            setAll_ready_user_signup('')


        } else if (signup.signupErr.includes("email")) {
            setSignupEmailErrr(signup.signupErr)
            setSignupNameErr('')
            setSignupnLastErr('')
            setSignupPasswordErr('')
            setSignupMobileN0Err('')
            setAll_ready_user_signup('')

        } else if (signup.signupErr.includes("Password")) {
            setSignupPasswordErr(signup.signupErr)
            setSignupNameErr('')
            setSignupnLastErr('')
            setSignupEmailErrr('')
            setSignupMobileN0Err('')
            setAll_ready_user_signup('')


        } else if (signup.signupErr.includes("mobile")) {
            setSignupMobileN0Err(signup.signupErr)
            setSignupNameErr('')
            setSignupnLastErr('')
            setSignupEmailErrr('')
            setSignupPasswordErr('')
            setAll_ready_user_signup('')

        }
        else {
            console.log("okoookkkkk");
            setAll_ready_user_signup(signup.signupErr)
            setSignupMobileN0Err('')
            setSignupNameErr('')
            setSignupnLastErr('')
            setSignupEmailErrr('')
            setSignupPasswordErr('')


        }
    }, [signup.signupErr])





    const Signup = () => {
        const user = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }
        dispatch(signupAction(user))
    }

    if (signup.verify) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <AdminNavbar />

            <div className='container'>
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-18 col-12">
                        <div class="card" >

                            <div class="card-body">
                                <h5 class="card-title text-center">ADMIN SIGNUP PAGE</h5>
                                <form>
                                    <div className="list-group">
                                        <label>FirstName</label>
                                        <input
                                            type="text"
                                            value={firstName}
                                            className="form-control"
                                            placeholder="FirstName"
                                            onChange={(e) => setFirstname(e.target.value)}

                                        />
                                        <p style={{ color: "red",fontStyle:"italic" }}>{signupNameErr}</p>
                                        <br></br>
                                        <label>lastName</label>
                                        <input
                                            type="text"
                                            value={lastName}
                                            className="form-control"
                                            placeholder="LastName"
                                            onChange={(e) => setLastName(e.target.value)}

                                        />
                                        <p style={{ color: "red" ,fontStyle:"italic" }}>{signupnLastErr}</p>
                                        <br></br>
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            value={email}
                                            className="form-control"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}

                                        />
                                        <p style={{ color: "red" ,fontStyle:"italic" }}>{signupEmailErr}</p>
                                        <br></br>
                                        <label>password</label>
                                        <input
                                            type="text"
                                            value={password}
                                            className="form-control"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                        <p style={{ color: "red",fontStyle:"italic" }}>{signupPasswordErr}</p>
                                        <br></br>
                                        <label>mobile.no</label>
                                        <input
                                            type="text"
                                            value={phoneNumber}
                                            className="form-control"
                                            placeholder="mobile.no"
                                            onChange={(e) => setPhoneNumber(e.target.value)}

                                        />
                                        <p style={{ color: "red" ,fontStyle:"italic" }}>{signupMobileN0Err}</p>
                                        <br></br>
                                       
                                    </div>
                                </form>
                                <br></br>
                                <div className="text-center">
                                    <p style={{ color: "red",fontStyle:"italic" }}>{all_ready_user_signup}</p>
                                </div>


                                <div className="text-center">
                                    <a class="btn btn-primary" onClick={Signup} style={{ fontSize: "20px", width: "80%" }}>SUBMIT</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Signup
