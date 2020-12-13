
import {productConstants} from '../constiants/constiansts'
const initstate = {
    product: [],
    loding: false,
    error: ''
}



const productReducer = (state = initstate, action) => {
    console.log(action.payload);
    switch (action.type) {
        case productConstants.GET_PRODUCT_REQUEST:
            state = {
                ...state,
                loding: true
            }
            break;
        case productConstants.GET_PRODUCT_SECCESS:
            state = {
                ...state,
                product:action.payload
            }
            break;
        case productConstants.GET_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break;
           
    }
    return state
}


export default productReducer