const { OrdersConstants } = require("../Constants")

const intiState = {
    orderDetailes:[],
    error:""
}

const ordersReducer=(state=intiState,action)=>{
    switch(action.type){
        case OrdersConstants.GET_ORDERS_SECCESS:
            state={
                ...state,
                orderDetailes:action.payload
            }
            break;
            case OrdersConstants.GET_ORDERS_FAILURE:
                state={
                    ...state,
                    error:action.payload
                }
                break
                case OrdersConstants.DELETE_ORDERS_SECCESS:
                state={
                    ...state,
                    orderDetailes:state.orderDetailes.filter(state=> state._id !==action.payload)
                }
                break;
                case OrdersConstants.DELETE_ORDERS_FAILURE:
                    state={
                        ...state,
                        error:action
                    }
                    break
    }
    return state
}

export default ordersReducer