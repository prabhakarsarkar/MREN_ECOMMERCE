import {categoryConstants } from '../Constants/index'
import axios from '../../axiosInstance/axios'
export const getCategoryAction = () => {
    const dispatch = (dispatch) => {
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



export const addCategoryAction=(data)=>{
    return dispatch => {
        axios.post("/add/category",{...data})
        .then((res)=>{
            dispatch({
                type:categoryConstants.ADD_CATEGORY_SECCESS,
                payload:res.data.categories
            })
        })
        .catch((err)=>{
            dispatch({
                type:categoryConstants.ADD_CATEGORY_FAILURE,
                payload:err
            })
        })   
    }
}


export const deleteCategory = (id)=>{
   return async dispatch=>{
        axios.delete(`/delete/category/${id}`)
        .then(()=>{
            dispatch({
                type:categoryConstants.DELETE_CATEGORY_SECCESS,
                payload:id,
            })
        })
        .catch((err)=>{
            dispatch({
                type:categoryConstants.DELETE_CATEGORY_FAILURE,
                payload:err
            })
        })
   }
}