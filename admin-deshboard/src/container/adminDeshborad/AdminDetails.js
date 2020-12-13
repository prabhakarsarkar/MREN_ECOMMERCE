import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminNavbar from '../../Compoents/Headers/AdminNavbar';
import { getUserDetailes } from '../../Redux/Actions';

const AdminDetails = () => {
    let count=0;
    const dispatch = useDispatch();
    const user = useSelector(state=> state.User.userData)
    console.log(user.userData,".........................user");

    useEffect(()=>{
        dispatch(getUserDetailes())
    },[])


    return (
        <div >
            <AdminNavbar/>
            <br></br><br></br><br></br>
            <div className="container-fluid">
                <div className="text-center center">
                    
                    <marquee width="80%" direction="left" height="90px" >
                    <h3 style={{color:"#FF1493"}}>welcome to Admin deshborad </h3>
                    </marquee>
                </div>
                <div className="row">
                <table className="table table-sm table-bordered table-hover table-striped">
                    <thead className="text-center">
                        <tr style={{background:"#00FF7F"}} >
                            <th scope="col">No</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">mobile</th>
                            <th scope="col">role</th>
                            
                           

                        </tr>
                    </thead>
                    <tbody className="text-center">
                       
                       {user.map(user=>

                            <tr  key={user._id}>
                        <th scope="row">{count+=1}</th>
                       <td>{user.firstName}</td>
                       <td>{user.lastName}</td>
                       <td>{user.phoneNumber}</td>
                       <td>{user.role}</td>
                              
                                
                            </tr>
                       )}
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    )
}

export default AdminDetails
