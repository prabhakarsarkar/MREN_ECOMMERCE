import axios from '../../Redux/Axiso/axios'
import { productConstants } from '../constiants/constiansts'


export const getProductAction = () => {
    return async dispatch => {
        dispatch({ type: productConstants.GET_PRODUCT_REQUEST })
        const res = await axios.get("/get/product")
        console.log(res.data.data, "lllllllllllllllllllll..............................");
        if (res.status === 200) {
            dispatch({
                type: productConstants.GET_PRODUCT_SECCESS,
                payload: res.data.data
            })
        }
        else {
            dispatch({
                type: productConstants.GET_PRODUCT_FAILURE,
                payload: res.data.error
            })
        }
    }
}


export const getProductByCatetegoryIdAction = (id) => {
    return dispatch => {
        axios.get(`get/product/${id}`)
            .then((res)=>{
                const result = res && res.data ? res.data : [];
                dispatch({
                    type: productConstants.GET_PRODUCT_BY_CATEGORY_ID_SECCESS,
                    payload: result 
                })
            })
            .catch(error=>{
                
                dispatch({
                    type: productConstants.GET_PRODUCT_BY_CATEGORY_ID_FAILURE,
                    payload: error
                })
            });

       
    }
}