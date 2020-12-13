import { authConstants } from "../Constants";

const initstate = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    authenticate: false,
    authenticating: false,
    loding: false,
    error: null,
    loginError: ''



}

const authReducer = (state = initstate, action) => {
    // console.log(action.payload);
    switch (action.type) {
        case authConstants.LOGIN_SECCESS:
            state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false

            }
            break;
        case authConstants.LOGIN_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loginError: action.payload.error.errors

            }
            break;
            case authConstants.LOGOUT_REQUEST:
            state = {
                ...state,
                loding:false
            }
            break
            case authConstants.LOGOUT_SECCESS:
                state={

                    ...initstate
                }
                break;
                case authConstants.LOGOUT_FAILURE:
                    state={
                        ...state,
                        message:action.payload.error
                    }

    }

    return state;
}




export default authReducer;
