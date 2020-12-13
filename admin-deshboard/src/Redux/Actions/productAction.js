
import axios from '../../axiosInstance/axios'
import { productConstants } from '../Constants'


export const getProductAction = () => {
    return dispatch => {
        axios.get("/get/product")
            .then((res) => {
                dispatch({
                    type: productConstants.GET_PRODUCT_SECCESS,
                    payload: res.data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: productConstants.GET_PRODUCT_FAILURE,
                    payload: err
                })
            })

    }
}



export const addProductAction = (product) => {
    return dispatch => {
        axios.post('/add/product', { ...product })
            .then((res) => {
                dispatch({
                    type: productConstants.ADD_PRODUCT_SECCESS,
                    payload: res.data.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: productConstants.GET_PRODUCT_FAILURE,
                    payload: err
                })
            })
    }
}


export const deleteProductAction = (id) => {
    return dispatch => {
        axios.delete(`/delete/product/${id}`)
            .then((res) => {
                dispatch({
                    type: productConstants.DELETE_PRODUCT_SECCESS,
                    payload: id
                })
            })
            .catch((err) => {
                dispatch({
                    type: productConstants.DELETE_PRODUCT_FAILURE,
                    payload:err
                })
            })

    }
}