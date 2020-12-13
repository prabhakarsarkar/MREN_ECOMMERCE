import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../Redux/Actions';
const AdminNavbar = () => {
    
    const dispatch = useDispatch();
 
    const auth = useSelector(state=> state.auth)

    const logOut =()=>{
        dispatch(signOut())
    }

    const isUserLogin = () => {
        return (
            <>
                <li className="nav-item"><a className="nav-link" href="/admin">Admin</a></li>
                <li className="nav-item"><a className="nav-link" href="/category">Category</a></li>
                <li className="nav-item"><a className="nav-link" href="/product">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="/orders">Orders</a></li>
                <li className="nav-item"><span className="nav-link" onClick={logOut}>SignOut</span></li>
            </>
        )
    }
    const isuserNotLoing = () => {
        return (
            <>
                <li className="nav-item"><a className="nav-link" href="/login">Loing</a></li>
                <li className="nav-item"><a className="nav-link" href="/Signup">signup</a></li>

            </>
        )
    }
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-primary"
                style={{ position: "fixed", width: "100%", zIndex: "1" }}>
                {/* > */}
                <div className="container-fluid">
                    <h1 className="navbar-brand"> Welcome to Admin Dashboard </h1>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarId">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarId">
                        <ul className="navbar-nav ml-auto">

                            {auth.authenticate  ? isUserLogin() :isuserNotLoing()}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AdminNavbar
