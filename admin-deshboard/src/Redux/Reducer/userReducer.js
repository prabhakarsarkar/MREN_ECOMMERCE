import { UserConstants } from '../Constants'

const initiState = {
    userData:[],
    loding:true,
    error:""
    
}


const userReducer = (state=initiState,action)=>{
    switch(action.type){
        case UserConstants.GET_USER_REQUEST:
            state={
                ...state,
                loding:true
            }
            break;
            case UserConstants.GET_USER_SECCESS:
                state={
                    ...state,
                    userData:action.payload
                }
                break;
                case UserConstants.GET_USER_FAILURE:
                    state={
                        ...state,
                        error:action.payload
                    }
    }
    return state

}

export default userReducer