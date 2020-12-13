import {productConstants} from '../constiants/constiansts'

const initstate = {
    GetproductById: [],
    loding: false,
    error: ''
}

const getProductBycategoryIdReducer = (state=initstate,action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCT_BY_CATEGORY_ID_REQUEST:
            state = {
                ...state,
                loding: true
            }
            break
        case productConstants.GET_PRODUCT_BY_CATEGORY_ID_SECCESS:
            state = {
                ...state,
                GetproductById: action.payload
            }
            break
        case productConstants.GET_PRODUCT_BY_CATEGORY_ID_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break
    }
    return state
}


export default getProductBycategoryIdReducer;