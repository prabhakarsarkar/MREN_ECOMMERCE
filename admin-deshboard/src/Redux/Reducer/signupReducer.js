const { signupConstants } = require("../Constants")

const initiState = {
    verify:false,
    signupErr:"",
    message:'',
    loding:false
}


const signupReducer = (state=initiState,action)=>{
    console.log(action.payload,"action");
    switch(action.type){
            case signupConstants.SIGNUP_SECCESS:
                state={
                    ...state,
                    verify:true,
                    loding:false,
                    message:action.payload
                    
                }
                break;
                case signupConstants.SIGNUP_FAILURE:
                    state={
                        ...initiState,
                        verify:false,
                        signupErr:action.payload
                    }
                    break;

    }
    return state
}


export default signupReducer