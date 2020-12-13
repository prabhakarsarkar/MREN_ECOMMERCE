const { categoryConstants } = require("../Constants")

const initstate = {
    categories: [],
    loding: false,
    error: ''

}

const categoryReducer = (state = initstate, action) => {
    console.log(action.payload);
    switch (action.type) {
        case categoryConstants.GET_CATEGORY_SECCESS:
            state = {
                ...state,
                categories: action.payload,
                loding: false
            }
            break;
        case categoryConstants.GET_CATEGORY_FAILURE:
            state = {
                ...state,
                error: action.payload.error
            }
            break;
                case categoryConstants.ADD_CATEGORY_SECCESS:
                    state={
                        ...state,
                        categories:[action.payload, ...state.categories],
                        loding:false
                    }
                    break;
                case categoryConstants.ADD_CATEGORY_FAILURE:
                    state={
                        ...state,
                        error:action.payload.error
                    }
                    break;
                    case categoryConstants.DELETE_CATEGORY_SECCESS:
                    state={
                        ...state,
                        categories:state.categories.filter(cate=> cate._id !==action.payload)
                    }
                    break;
    }
    return state

}

export default categoryReducer;