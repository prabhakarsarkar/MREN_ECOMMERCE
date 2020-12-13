
import axios from '../../axiosInstance/axios'
import { OrdersConstants } from '../Constants';
export const getOrdersAction = ()=>{
    return dispatch=>{
        axios.get("/get/order")
        .then((res)=>{
            const result = res && res.data ? res.data : [];
            dispatch({
                type:OrdersConstants.GET_ORDERS_SECCESS,
                payload:result
            })

        })
        .catch((error)=>{
            dispatch({
                type:OrdersConstants.GET_ORDERS_FAILURE,
                paylod:error
            })
        })
    }
} 

export const deleteOrderAction = (id)=>{
    console.log(id);

    return dispatch=>{
        axios.delete(`/delete/order/${id}`)
        .then((res)=>{
            dispatch({
                type:OrdersConstants.DELETE_ORDERS_SECCESS,
                payload:id
            })
        })
        .catch((err)=>{
            dispatch({
                type:OrdersConstants.DELETE_ORDERS_FAILURE,
                payload:err
            })
        })

        
    }
}