import { productConstants } from "../Constants/index"
const initstate = {
    product: [],
    loding: false,
    error: ''
}



const productReducer = (state = initstate, action) => {
    switch (action.type) {
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
        case productConstants.ADD_PRODUCT_SECCESS:
            state = {
                ...state,
                product: [action.payload, ...state.product]
            }
            break;
        case productConstants.ADD_PRODUCT_FAILURE:
            state = {
                ...state,
                error: action.payload
            }
            break;
                case productConstants.DELETE_PRODUCT_SECCESS:
                    state={
                        ...state,
                        product:state.product.filter(state=> state._id !==action.payload),
                        loding:false
                    }
                    break;
                    case productConstants.DELETE_PRODUCT_FAILURE:
                        state={
                            ...state,
                            error:action.payload.error
                        }
                        break;


    }
    return state
}


export default productReducer