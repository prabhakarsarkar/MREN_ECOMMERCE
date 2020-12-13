import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../Compoents/Headers/AdminNavbar'
import {getOrdersAction,deleteOrderAction } from '../../Redux/Actions/ordersAction';

const Orders = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrdersAction())
    }, [])

    const orders = useSelector(state => state.order.orderDetailes)
    console.log(orders, ",,,,,,,,,,,,,,,,,,,,,,");

    const deleteOrder = (id)=>{
        // console.log(id,"...........................");
        dispatch(deleteOrderAction(id))
    } 
const orderTable=()=>{
     return (
        <div>
           
            <div className="container-fluid">
                <div className="text-center center">
                    <h3>User order detailes </h3>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead className="text-center">
                            <tr className="bg-success" >
                                <th scope="col">No</th>
                                <th scope="col">name</th>
                                <th scope="col">address</th>
                                <th scope="col">dist</th>
                                <th scope="col">mobile</th>
                                <th scope="col">pincode</th>
                                <th scope="col">productName</th>
                                <th scope="col">price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">totalAmount</th>
                                <th scope="col">detele category</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {orders.map((item, i) =>
                                <tr key={i}>
                                    <th scope="row">{i += 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.dist}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.pincode}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.totalAmount}</td>
                                    
                                    <td>
                                        <button className="btn btn-danger" onClick={()=> deleteOrder(item._id)}>delete</button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
   
    return(
    <div>
         <AdminNavbar />
            <br></br><br></br><br></br>
       {
       !orders.length ?
       <h3 className="text-muted text-center p-5" style={{fontSize:"100px"}} >No order is there</h3>
        :<orderTable/>
    }
    </div>
    )
}

export default Orders
