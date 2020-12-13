import  axios from  '../Axiso/axios'
import {categoryConstants} from '../constiants/constiansts'

export const getCategoryAction = () => {
    const dispatch =  (dispatch) => {
          axios.get("/get/category")
         .then((res)=>{
            dispatch({
                type: categoryConstants.GET_CATEGORY_SECCESS,
                payload: res.data
            })

         })
         .catch((err)=>{
            dispatch({
                type:categoryConstants.GET_CATEGORY_FAILURE,
                payload:err
            })
         })
    }
    return dispatch;
}

